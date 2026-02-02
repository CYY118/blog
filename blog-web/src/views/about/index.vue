<template>
  <div class="about-page">
    <el-card class="about-card">
      <div class="about-header">
        <h1 class="about-title">关于我</h1>
        <div class="about-avatar">
          <img src="https://img2.baidu.com/it/u=3029837478,1144772205&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1731862800&t=a82c956c5d1b9ded3bcd9ffe204802f5" alt="头像" class="avatar-img">
        </div>
      </div>
      
      <!-- 直接显示默认内容，不依赖store -->
      <div class="about-content" ref="content">
        <div class="about-section">
          <h2 class="section-title">个人介绍</h2>
          <p>你好，我是一名热爱技术的全栈开发者，专注于Web开发和系统架构。我喜欢不断学习新技术，并且热衷于将所学应用到实际项目中。</p>
          <p>我相信技术可以改变世界，因此我一直在努力提升自己的技术水平，希望能够通过技术创造更多有价值的产品。</p>
          <p>拥有多年的软件开发经验，擅长从需求分析到系统设计、编码实现、测试部署的全流程开发。注重代码质量和用户体验，追求简洁高效的解决方案。</p>
          <p>除了技术，我还喜欢阅读、旅行和摄影，这些爱好让我保持创造力和对生活的热情，也为我的技术工作带来不同的视角。</p>
        </div>
        
        <div class="about-section">
          <h2 class="section-title">技术栈</h2>
          <div class="tech-stack">
            <div class="tech-item">
              <div class="tech-icon">
                <i class="el-icon-s-grid"></i>
              </div>
              <div class="tech-info">
                <h3>前端技术</h3>
                <p>Vue 2.0 / Vue 3.0、React、JavaScript、TypeScript、HTML5、CSS3、Sass、Element UI、Ant Design、Bootstrap</p>
                <p>Webpack、Vite、Rollup、ESLint、Prettier</p>
              </div>
            </div>
            <div class="tech-item">
              <div class="tech-icon">
                <i class="el-icon-server"></i>
              </div>
              <div class="tech-info">
                <h3>后端技术</h3>
                <p>Java、Spring Boot、Spring Cloud、MyBatis、MySQL、Redis、Docker、Kubernetes</p>
                <p>Spring Security、OAuth2、JWT、RabbitMQ、Kafka</p>
              </div>
            </div>
            <div class="tech-item">
              <div class="tech-icon">
                <i class="el-icon-data-analysis"></i>
              </div>
              <div class="tech-info">
                <h3>其他技术</h3>
                <p>Git、Linux、Elasticsearch、WebSocket、消息队列</p>
                <p>Python、Django、Flask、数据分析、机器学习基础</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="about-section">
          <h2 class="section-title">项目经历</h2>
          <div class="project-list">
            <div class="project-item">
              <h3>个人博客系统</h3>
              <p>一个功能完整的个人博客系统，支持文章管理、评论系统、资源分享、用户认证等功能。系统采用前后端分离架构，前端使用Vue，后端使用Spring Boot，数据库使用MySQL，缓存使用Redis。</p>
              <p>该系统不仅满足了个人博客的基本需求，还添加了许多特色功能，如文章标签管理、评论回复、资源下载统计等。系统性能优异，能够支持高并发访问。</p>
              <p><strong>技术栈：</strong>Spring Boot、Vue、MySQL、Redis、Element UI</p>
            </div>
            <div class="project-item">
              <h3>电商平台</h3>
              <p>基于微服务架构的电商平台，支持商品管理、订单系统、支付集成、物流跟踪等功能。系统采用Spring Cloud微服务框架，使用Docker容器化部署，Kubernetes进行集群管理。</p>
              <p>该平台具有完整的电商功能，包括商品浏览、购物车、订单管理、支付流程、物流查询等。系统支持多种支付方式，如支付宝、微信支付等，并且具有完善的订单状态管理和库存管理功能。</p>
              <p><strong>技术栈：</strong>Spring Cloud、React、MongoDB、RabbitMQ、Docker、Kubernetes</p>
            </div>
            <div class="project-item">
              <h3>企业管理系统</h3>
              <p>为企业定制的管理系统，包含人事管理、财务管理、项目管理等模块。系统采用B/S架构，前端使用Vue，后端使用Spring Boot，数据库使用Oracle。</p>
              <p>该系统为企业提供了全面的管理解决方案，包括员工信息管理、考勤管理、薪资管理、项目进度跟踪、成本核算等功能。系统具有完善的权限管理和数据安全措施，确保企业数据的安全性。</p>
              <p><strong>技术栈：</strong>Spring Boot、Vue、Oracle、Redis、Ant Design</p>
            </div>
            <div class="project-item">
              <h3>智能客服系统</h3>
              <p>基于AI技术的智能客服系统，支持自然语言处理、意图识别、知识库管理等功能。系统采用Python作为后端语言，使用TensorFlow进行模型训练，前端使用Vue构建用户界面。</p>
              <p>该系统能够自动回答用户的常见问题，识别用户意图，并提供个性化的服务。系统还具有学习能力，能够从用户的交互中不断改进自己的回答质量。</p>
              <p><strong>技术栈：</strong>Python、Django、Vue、TensorFlow、Elasticsearch</p>
            </div>
          </div>
        </div>
        
        <div class="about-section">
          <h2 class="section-title">教育背景</h2>
          <div class="education-list">
            <div class="education-item">
              <h3>计算机科学与技术 - 硕士</h3>
              <p><strong>学校：</strong>北京大学</p>
              <p><strong>时间：</strong>2018年9月 - 2021年6月</p>
              <p><strong>主修课程：</strong>人工智能、机器学习、分布式系统、计算机网络、算法设计与分析</p>
              <p><strong>毕业论文：</strong>基于深度学习的自然语言处理技术在客服系统中的应用</p>
            </div>
            <div class="education-item">
              <h3>计算机科学与技术 - 学士</h3>
              <p><strong>学校：</strong>清华大学</p>
              <p><strong>时间：</strong>2014年9月 - 2018年6月</p>
              <p><strong>主修课程：</strong>数据结构、操作系统、数据库原理、计算机组成原理、软件工程</p>
              <p><strong>荣誉奖项：</strong>优秀学生奖学金、校级优秀毕业生</p>
            </div>
          </div>
        </div>
        
        <div class="about-section">
          <h2 class="section-title">工作经历</h2>
          <div class="work-list">
            <div class="work-item">
              <h3>高级全栈工程师</h3>
              <p><strong>公司：</strong>阿里巴巴集团</p>
              <p><strong>时间：</strong>2021年7月 - 至今</p>
              <p><strong>职责：</strong>负责电商平台的前后端开发，参与系统架构设计和技术选型，带领团队完成多个重要项目的开发和上线。</p>
              <p><strong>成就：</strong>主导开发的智能推荐系统，提升了平台的用户体验和转化率；优化了系统架构，提高了系统的性能和可靠性。</p>
            </div>
            <div class="work-item">
              <h3>全栈工程师</h3>
              <p><strong>公司：</strong>腾讯科技</p>
              <p><strong>时间：</strong>2019年7月 - 2021年6月</p>
              <p><strong>职责：</strong>参与社交平台的开发和维护，负责前后端功能的实现和优化。</p>
              <p><strong>成就：</strong>开发的实时消息系统，支持千万级用户的并发消息传递；优化了前端性能，提升了用户体验。</p>
            </div>
          </div>
        </div>
        
        <div class="about-section">
          <h2 class="section-title">技能证书</h2>
          <div class="certificate-list">
            <div class="certificate-item">
              <h3>阿里云认证架构师</h3>
              <p><strong>颁发机构：</strong>阿里云</p>
              <p><strong>时间：</strong>2022年</p>
            </div>
            <div class="certificate-item">
              <h3>腾讯云认证高级工程师</h3>
              <p><strong>颁发机构：</strong>腾讯云</p>
              <p><strong>时间：</strong>2021年</p>
            </div>
            <div class="certificate-item">
              <h3>Oracle认证Java开发工程师</h3>
              <p><strong>颁发机构：</strong>Oracle</p>
              <p><strong>时间：</strong>2020年</p>
            </div>
            <div class="certificate-item">
              <h3>微软认证解决方案开发者</h3>
              <p><strong>颁发机构：</strong>微软</p>
              <p><strong>时间：</strong>2019年</p>
            </div>
          </div>
        </div>
        
        <div class="about-section">
          <h2 class="section-title">联系方式</h2>
          <div class="contact-info">
            <div class="contact-item">
              <i class="el-icon-message"></i>
              <span>邮箱：contact@example.com</span>
            </div>
            <div class="contact-item">
              <i class="el-icon-phone"></i>
              <span>电话：138****8888</span>
            </div>
            <div class="contact-item">
              <i class="el-icon-chat-dot-round"></i>
              <span>微信：example_wechat</span>
            </div>
            <div class="contact-item">
              <i class="el-icon-link"></i>
              <span>GitHub：github.com/example</span>
            </div>
            <div class="contact-item">
              <i class="el-icon-notebook-2"></i>
              <span>个人网站：www.example.com</span>
            </div>
            <div class="contact-item">
              <i class="el-icon-map-location"></i>
              <span>地址：北京市海淀区</span>
            </div>
          </div>
        </div>
        
        <div class="about-section">
          <h2 class="section-title">个人理念</h2>
          <div class="philosophy">
            <blockquote>
              <p>持续学习，不断进步 - 技术日新月异，保持学习的态度是成功的关键</p>
              <p>技术改变世界，代码创造价值 - 通过技术创新解决实际问题</p>
              <p>专注细节，追求卓越 - 细节决定成败，对每一行代码负责</p>
              <p>团队协作，共同成长 - 一个人的力量有限，团队的力量无穷</p>
              <p>用户至上，体验为王 - 以用户需求为中心，打造优质产品</p>
            </blockquote>
          </div>
        </div>
        
        <div class="about-section">
          <h2 class="section-title">兴趣爱好</h2>
          <div class="hobby-list">
            <div class="hobby-item">
              <h3>技术研究</h3>
              <p>关注前沿技术动态，参与开源项目，撰写技术博客</p>
            </div>
            <div class="hobby-item">
              <h3>阅读</h3>
              <p>喜欢阅读技术书籍、行业资讯、科幻小说等</p>
            </div>
            <div class="hobby-item">
              <h3>旅行</h3>
              <p>喜欢探索不同的地方，了解不同的文化和风景</p>
            </div>
            <div class="hobby-item">
              <h3>摄影</h3>
              <p>热爱记录生活中的美好瞬间，擅长风景和人像摄影</p>
            </div>
            <div class="hobby-item">
              <h3>运动</h3>
              <p>喜欢打篮球、跑步、游泳等运动，保持身体健康</p>
            </div>
          </div>
        </div>
      </div>
      <mj-image-preview ref="imagePreview" />
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'About',

  mounted() {
    this.initImagePreview();
  },
  methods: {
    initImagePreview() {
      this.$nextTick(() => {
        setTimeout(() => {  
        const content = this.$refs.content;
        if (content) {
          const images = content.getElementsByTagName('img');
          Array.from(images).forEach(img => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', () => {
              this.$refs.imagePreview.show(img.src);
            });
          });
        }
      }, 500); 
      });
    }
  }
}
</script>

<style lang="scss" scoped>

.about-page {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: $spacing-lg;
  margin-bottom: $spacing-md;
  @include responsive(lg) {
    padding: $spacing-sm;
  }
}

.about-card {
  border-radius: $border-radius-lg;
  box-shadow: $shadow-md;
  overflow: hidden;
}

.about-header {
  text-align: center;
  padding: $spacing-xl;
  background: linear-gradient(135deg, rgba($primary, 0.1), rgba($secondary, 0.1));
  margin: -$spacing-md;
  margin-bottom: $spacing-lg;
}

.about-title {
  font-size: 2rem;
  font-weight: 700;
  color: $primary;
  margin-bottom: $spacing-md;
}

.about-avatar {
  margin: 0 auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.8);
  box-shadow: $shadow-md;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-content {
  line-height: 1.8;
  color: var(--text-primary);
  padding: 0 $spacing-lg;
  padding-bottom: $spacing-xl;
}

.about-section {
  margin-bottom: $spacing-xl;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: $primary;
  margin-bottom: $spacing-md;
  padding-bottom: $spacing-sm;
  border-bottom: 2px solid rgba($primary, 0.2);
}

.tech-stack {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-md;
  margin-top: $spacing-md;
}

.tech-item {
  display: flex;
  gap: $spacing-md;
  padding: $spacing-md;
  background: rgba($primary, 0.05);
  border-radius: $border-radius-md;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: $shadow-sm;
    background: rgba($primary, 0.1);
  }
}

.tech-icon {
  font-size: 2rem;
  color: $primary;
  margin-top: $spacing-xs;
}

.tech-info h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: $spacing-sm;
  color: var(--text-primary);
}

.tech-info p {
  color: var(--text-secondary);
  margin: 0;
}

.project-list {
  margin-top: $spacing-md;
}

.project-item {
  padding: $spacing-md;
  background: rgba($secondary, 0.05);
  border-radius: $border-radius-md;
  margin-bottom: $spacing-md;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: $shadow-sm;
    background: rgba($secondary, 0.1);
  }
}

.project-item h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: $spacing-sm;
  color: $secondary;
}

.project-item p {
  color: var(--text-secondary);
  margin-bottom: $spacing-xs;
}

.project-item p:last-child {
  margin-bottom: 0;
}

.education-list,
.work-list {
  margin-top: $spacing-md;
}

.education-item,
.work-item {
  padding: $spacing-md;
  background: rgba($primary, 0.05);
  border-radius: $border-radius-md;
  margin-bottom: $spacing-md;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: $shadow-sm;
    background: rgba($primary, 0.1);
  }
}

.education-item h3,
.work-item h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: $spacing-sm;
  color: $primary;
}

.education-item p,
.work-item p {
  color: var(--text-secondary);
  margin-bottom: $spacing-xs;
}

.education-item p:last-child,
.work-item p:last-child {
  margin-bottom: 0;
}

.certificate-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: $spacing-md;
  margin-top: $spacing-md;
}

.certificate-item {
  padding: $spacing-md;
  background: rgba($secondary, 0.05);
  border-radius: $border-radius-md;
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: $shadow-sm;
    background: rgba($secondary, 0.1);
  }
}

.certificate-item h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: $spacing-sm;
  color: $secondary;
}

.certificate-item p {
  color: var(--text-secondary);
  margin: $spacing-xs 0;
  font-size: 0.9rem;
}

.contact-info {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-md;
  margin-top: $spacing-md;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  padding: $spacing-sm $spacing-md;
  background: rgba($primary, 0.05);
  border-radius: $border-radius-md;
  color: var(--text-primary);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba($primary, 0.1);
    transform: translateY(-2px);
    box-shadow: $shadow-sm;
  }
  
  i {
    color: $primary;
    font-size: 1.2rem;
  }
}

.philosophy {
  margin-top: $spacing-md;
}

blockquote {
  padding: $spacing-md;
  background: linear-gradient(135deg, rgba($primary, 0.1), rgba($secondary, 0.1));
  border-left: 4px solid $primary;
  border-radius: $border-radius-md;
  font-style: italic;
  color: var(--text-primary);
}

blockquote p {
  margin: $spacing-xs 0;
  line-height: 1.6;
}

.hobby-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: $spacing-md;
  margin-top: $spacing-md;
}

.hobby-item {
  padding: $spacing-md;
  background: rgba($primary, 0.05);
  border-radius: $border-radius-md;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: $shadow-sm;
    background: rgba($primary, 0.1);
  }
}

.hobby-item h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: $spacing-sm;
  color: $primary;
}

.hobby-item p {
  color: var(--text-secondary);
  margin: 0;
  font-size: 0.9rem;
}

@include responsive(sm) {
  :deep(img) {
      width: 100% !important;
  }
  
  .tech-stack,
  .certificate-list,
  .hobby-list {
    grid-template-columns: 1fr;
  }
  
  .contact-info {
    flex-direction: column;
  }
}
</style>
