<template>
  <div class="notifications-page">
    <!-- 左侧消息分类 -->
    <div class="notifications-sidebar">
      <div class="sidebar-header">
        <h2>消息分类</h2>
      </div>
      <div class="category-list">
        <div 
          v-for="category in categories" 
          :key="category.type"
          class="category-item"
          :class="{ active: currentCategory === category.type }"
          @click="switchCategory(category.type)"
        >
          <i :class="category.icon"></i>
          <span>{{ category.name }}</span>
          <el-badge 
            v-if="category.unread" 
            :value="category.unread" 
            class="category-badge"
          />
        </div>
      </div>
    </div>

    <!-- 右侧消息列表 -->
    <div class="notifications-main">
      <div class="notifications-header">
        <h1>{{ currentCategoryName }}</h1>
        <div class="header-actions">
          <el-button type="text" @click="markAllAsRead" v-if="hasUnread">
            <i class="fas fa-check-double"></i> 全部已读
          </el-button>
        </div>
      </div>

      <div class="notifications-content" v-loading="loading">
        <template v-if="notifications.length">
          <div 
            v-for="notification in filteredNotifications" 
            :key="notification.id" 
            class="notification-item"
            :class="{ unread: !notification.isRead }"
            @click="handleNotificationClick(notification)"
          >
            <div class="notification-icon">
              <i :class="getNotificationIcon(notification.type)"></i>
            </div>
            <div class="notification-body">
              <div class="notification-title">{{ notification.title }}</div>
              <div class="notification-message">
                <span v-if="notification.type === 'comment'">
                  <span v-if="notification.fromUserId">
                    {{ notification.fromNickname }} 回复了你在 
                    <span class="article-title" @click="handleArticleClick(notification.articleId)">{{ notification.articleTitle }}</span> 中的评论
                  </span>
                  <span v-else>
                    {{ notification.fromNickname }} 评论了你的文章
                  </span>

                  <div v-html="notification.message"></div>
                </span>

                <span v-if="notification.type === 'like'">
                  {{ notification.toNickname }} 点赞了你的 
                  <span class="article-title" @click="handleArticleClick(notification.articleId)">{{ notification.articleTitle }}</span>
                  文章
                </span>

                <span v-if="notification.type === 'follow'">
                  {{ notification.fromNickname }} 关注了你
                </span>

                <span v-if="notification.type === 'system'">
                  {{ notification.message }}
                </span>
              </div>
          
              <div class="notification-time">{{ formatTime(notification.createTime) }}</div>
            </div>
            <div class="notification-actions">
              <el-button 
                type="text" 
                size="small"
                @click.stop="deleteNotification(notification.id)"
              >
                <i class="fas fa-trash-alt"></i>
              </el-button>
            </div>
          </div>

          <div class="pagination-box">
            <el-pagination background v-if="notifications.length" @current-change="handlePageChange"
              :current-page="params.pageNum" :page-size="params.pageSize" layout="prev, pager, next" :total="total">
            </el-pagination>
          </div>
        </template>
        
        <div v-else class="empty-state">
          <i class="fas fa-bell-slash"></i>
          <p>暂无{{ currentCategoryName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getNotificationsApi, markNotificationAsReadApi, markAllNotificationsAsReadApi,
   getUnreadNotificationsCountApi, deleteNotificationApi } from '@/api/message'
import { formatTime } from '@/utils/time'
export default {
  name: 'Notifications',
  data() {
    return {
      currentCategory: 'all',
      categories: [
        { 
          type: 'all',
          name: '全部消息',
          icon: 'fas fa-bell',
          unread: 0
        },
        { 
          type: 'system',
          name: '系统消息',
          icon: 'fas fa-cog',
          unread: 0
        },
        { 
          type: 'comment',
          name: '评论消息',
          icon: 'fas fa-comment',
          unread: 0
        },
        { 
          type: 'like',
          name: '点赞消息',
          icon: 'fas fa-heart',
          unread: 0
        },
        { 
          type: 'follow',
          name: '关注消息',
          icon: 'fas fa-user-plus',
          unread: 0
        }
      ],
      notifications: [],
      params:{
        pageNum: 1,
        pageSize: 10,
        type: null
      },
      total: 0,
      loading: false
    }
  },
  computed: {
    currentCategoryName() {
      const category = this.categories.find(c => c.type === this.currentCategory)
      return category ? category.name : '全部消息'
    },
    filteredNotifications() {
      if (this.currentCategory === 'all') {
        return this.notifications
      }
      return this.notifications.filter(n => n.type === this.currentCategory)
    },
    hasUnread() {
      return this.filteredNotifications.some(notification => !notification.isRead)
    }
  },
  methods: {
    /**
     * 切换消息分类
     */
    switchCategory(type) {
      this.currentCategory = type
      this.params.type = type === 'all' ? null : type
      this.params.pageNum = 1
      this.fetchNotifications()
    },
    /**
     * 获取消息通知图标
     */
    getNotificationIcon(type) {
      const category = this.categories.find(c => c.type === type)
      return category ? category.icon : 'fas fa-bell'
    },
    /**
     * 格式化时间
     */
    formatTime(time) {
      return formatTime(time)
    },
    /**
     * 处理文章点击
     */
    handleArticleClick(id) {
      this.$router.push(`/post/${id}`)
    },
    /**
     * 更新未读数
     */
    updateUnreadCount(all) {
      // 更新每个分类的未读数
      this.categories.forEach(category => {
        if (all) {
          category.unread = 0
          return
        }
        if (category.type === 'all') {
          category.unread = this.notifications.filter(n => !n.isRead).length
        } else {
          category.unread = this.notifications.filter(
            n => n.type === category.type && !n.isRead
          ).length
        }
      })
    },
    /**
     * 获取消息通知
     */
    async fetchNotifications() {
      this.loading = true
      try {
        const { data } = await getNotificationsApi(this.params)
        this.notifications = data.records
        this.total = data.total
      } catch (error) {
        this.$message.error('获取消息通知失败')
      } finally {
        this.loading = false
      }
    },

    /**
     * 处理分页
     */
    handlePageChange(page) {
      this.params.pageNum = page
      this.fetchNotifications()
    },  
    /**
     * 标记全部已读
     */
    async markAllAsRead() {
      try {
        await markAllNotificationsAsReadApi()
        this.fetchNotifications()
        this.updateUnreadCount(true)
        this.$message.success('已将所有消息标记为已读')
      } catch (error) {
        this.$message.error('操作失败')
      }
    },
    /**
     * 处理消息通知点击
     */
    async handleNotificationClick(notification) {
      if (!notification.isRead) {
        try {
          await markNotificationAsReadApi(notification.id)
          notification.isRead = true
          this.updateUnreadCount()
        } catch (error) {
          this.$message.error('标记已读失败')
        }
      }
    },
    /**
     * 删除消息通知
     */
    async deleteNotification(id) {
      this.$confirm('确定要删除这条消息吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        try {
          await deleteNotificationApi(id)
          this.updateUnreadCount()
          this.$message.success('删除成功')
        } catch (error) {
          this.$message.error('删除失败')
        }
      }).catch(() => {})
    },
    /**
     * 获取未读消息数量
     */
    async getUnreadNotificationsCount() {
      const { data } = await getUnreadNotificationsCountApi()
      let unreadCount = 0
      this.categories.forEach(category => {
        if (category.type !== 'all') {
          category.unread = data[category.type]?.num || 0
          unreadCount += category.unread
        }
      })
      this.categories.find(c => c.type === 'all').unread = unreadCount
    } 
  },
  created() {
    if(!this.$store.state.userInfo){
      this.$router.push('/login')
      return
    }
    this.fetchNotifications()
    this.getUnreadNotificationsCount()
    }
}
</script>

<style lang="scss" scoped>
.notifications-page {
  display: flex;
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  min-height: calc(100vh - 64px);
}

.notifications-sidebar {
  width: 240px;
  background: var(--card-bg);
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
  
  .sidebar-header {
    padding: 16px;
    border-bottom: 1px solid var(--border-color);
    
    h2 {
      font-size: 1.1em;
      font-weight: 500;
      color: var(--text-primary);
      margin: 0;
    }
  }
  
  .category-item {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    color: var(--text-secondary);
    cursor: pointer;
    transition: background-color 0.2s ease;
    
    i {
      font-size: 1.1em;
      width: 24px;
      margin-right: 12px;
      
      &.fa-bell { color: #1677ff; }
      &.fa-cog { color: #52c41a; }
      &.fa-comment { color: #722ed1; }
      &.fa-heart { color: #eb2f96; }
      &.fa-user-plus { color: #13c2c2; }
    }
    
    span {
      flex: 1;
      font-size: 0.9em;
    }
    
    &:hover {
      background: rgba($primary, 0.04);
    }
    
    &.active {
      background: rgba($primary, 0.08);
      color: $primary;
      
      i {
        color: $primary;
      }
    }
    
    .category-badge {
      margin-left: auto;
      
      :deep(.el-badge__content) {
        background-color: $primary;
        border: none;
        padding: 0 6px;
        height: 16px;
        line-height: 16px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: normal;
      }
    }
  }
}

.notifications-main {
  flex: 1;
  min-width: 0;
  
  .notifications-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    
    h1 {
      font-size: 1.2em;
      font-weight: 500;
      color: var(--text-primary);
    }
    
    .header-actions {
      .el-button {
        color: $primary;
        
        i {
          margin-right: 4px;
        }
      }
    }
  }
}

.notifications-content {
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.notification-item {
  display: flex;
  align-items: flex-start;
  padding: 16px;
  border-bottom: 1px solid var(--border-color);
  background: var(--card-bg);
  transition: background-color 0.2s ease;
  
  &:hover {
    background: rgba($primary, 0.02);
  }
  
  .notification-icon {
    width: 36px;
    height: 36px;
    border-radius: 4px;
    background: rgba($primary, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    
    i {
      font-size: 1.1em;
      
      &.fa-bell { color: #1677ff; background: rgba(22, 119, 255, 0.1); }
      &.fa-cog { color: #52c41a; background: rgba(82, 196, 26, 0.1); }
      &.fa-comment { color: #722ed1; background: rgba(114, 46, 209, 0.1); }
      &.fa-heart { color: #eb2f96; background: rgba(235, 47, 150, 0.1); }
      &.fa-user-plus { color: #13c2c2; background: rgba(19, 194, 194, 0.1); }
    }
  }
  
  .notification-body {
    flex: 1;
    min-width: 0;
    
    .notification-title {
      font-size: 1em;
      color: var(--text-primary);
      margin-bottom: 6px;
      font-weight: 500;
    }
    
    .notification-message {
      font-size: 0.95em;
      color: var(--text-secondary);
      margin-bottom: 6px;
      line-height: 1.5;
      .article-title{
        color: $primary;
        cursor: pointer;
        &:hover{
          text-decoration: underline;
        }
      }
    }
    
    .notification-time {
      font-size: 0.85em;
      color: var(--text-secondary);
      margin-top: $spacing-sm;
    }
  }
  
  .notification-actions {
    margin-left: 12px;
    visibility: hidden;
    
    .el-button {
      padding: 4px;
      
      i {
        font-size: 0.9em;
        color: var(--text-secondary);
      }
      
      &:hover i {
        color: #ff4d4f;
      }
    }
  }
  
  &:hover .notification-actions {
    visibility: visible;
  }
  
  &.unread {
    background: rgba($primary, 0.04);
    
    &:hover {
      background: rgba($primary, 0.06);
    }
  }
}

.empty-state {
  padding: 40px;
  text-align: center;
  color: var(--text-secondary);
  background: var(--card-bg);
  border-radius: 8px;
  
  i {
    font-size: 2em;
    margin-bottom: 12px;
  }
  
  p {
    font-size: 0.95em;
    margin: 0;
  }
}

// 移动端适配
@media screen and (max-width: 768px) {
  .notifications-page {
    padding: 16px;
  }
  
  .notifications-sidebar {
    width: 100%;
  }
  
  .category-item {
    padding: 10px 16px;
    
    i {
      margin-right: 8px;
    }
  }
}
</style>