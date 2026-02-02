<template>
  <div class="emoji-picker">
    <button class="emoji-trigger" @click.stop="togglePanel">
      <i class="far fa-smile"></i>
    </button>
    
    <div v-if="show" class="emoji-panel" v-click-outside="closePanel">
      <div class="emoji-grid">
        <div 
          v-for="emoji in emojis" 
          :key="emoji.name"
          class="emoji-item"
          @click="selectEmoji(emoji)"
        >
          <img 
            :src="emoji.url" 
            :alt="emoji.name"
            :title="emoji.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emojis from '@/assets/emoji.json'

export default {
  name: 'EmojiPicker',
  data() {
    return {
      show: false,
      emojis
    }
  },
  methods: {
    togglePanel() {
      this.show = !this.show
      if (window.innerWidth <= 768) {
        document.body.style.overflow = this.show ? 'hidden' : ''
      }
    },
    closePanel() {
      this.show = false
      if (window.innerWidth <= 768) {
        document.body.style.overflow = ''
      }
    },
    selectEmoji(emoji) {
      this.$emit('select', emoji.url)
      this.closePanel()
    }
  },
  beforeDestroy() {
    document.body.style.overflow = ''
  }
}
</script>

<style lang="scss" scoped>
.emoji-picker {
  position: relative;
  display: inline-block;
}

.emoji-trigger {
  padding: 6px;
  border: none;
  background: none;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 4px;
  
  &:hover {
    color: $primary;
    background: var(--hover-bg);
  }

  i{
    font-size: 18px;
  }
}

.emoji-panel {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 0;
  background: var(--card-bg);
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color);
  padding: 12px;
  z-index: 1000;
  
  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 16px 16px 0 0;
    padding-bottom: calc(12px + env(safe-area-inset-bottom));
    
    &::before {
      display: none;
    }
  }
}

.emoji-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 8px;
  width: 450px;
  max-height: 220px;
  overflow-y: auto;
  padding: 4px;
  
  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(6, 1fr);
    max-height: 280px;
    padding: 8px;
  }
}

.emoji-item {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s;
  
  @media (max-width: 768px) {
    padding: 8px;
    
    &:hover {
      transform: none;
    }
    
    &:active {
      background: var(--hover-bg);
      transform: scale(0.95);
    }
    
    img {
      width: 36px;
      height: 36px;
    }
  }
  
  &:hover {
    background: var(--hover-bg);
    transform: scale(1.1);
  }
  
  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
}
</style> 