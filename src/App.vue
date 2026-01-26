<script setup lang="ts">
import { computed, onMounted, ref, type Ref, watch } from 'vue'
import { RouterView } from 'vue-router'
import { useKeyboard } from './composables/keyboard'
import { backgroundImage } from './helper/indexeddb'
import { initNotification } from './helper/notification'
import { getBackendFromUrl, isPreferredDark } from './helper/utils'
import { blurIntensity, dashboardTransparent, disablePullToRefresh } from './store/settings'
import { activeUuid, backendList } from './store/setup'

const app = ref<HTMLElement>()
const toast = ref<HTMLElement>()

// 初始化通知和键盘快捷键
initNotification(toast as Ref<HTMLElement>)
useKeyboard()

// 设置浏览器顶栏颜色（适配 Safari 等）
const setThemeColor = () => {
  const themeColor = getComputedStyle(app.value!).getPropertyValue('background-color').trim()
  const metaThemeColor = document.querySelector('meta[name="theme-color"]')
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', themeColor)
  }
}

// 监听系统深色模式变化
watch(isPreferredDark, setThemeColor)

// 监听并处理“禁止下拉刷新”
watch(
  disablePullToRefresh,
  (val) => {
    document.body.style.overscrollBehavior = val ? 'none' : ''
    document.body.style.overflow = val ? 'hidden' : ''
  },
  { immediate: true },
)

// 处理 URL 自动连接逻辑
const autoSwitchToURLBackendIfExists = () => {
  const backend = getBackendFromUrl()
  if (!backend) return

  const target = backendList.value.find(
    (b) =>
      b.host === backend.host &&
      b.port === backend.port &&
      b.password === backend.password &&
      b.protocol === backend.protocol &&
      b.secondaryPath === backend.secondaryPath,
  )

  if (target) {
    activeUuid.value = target.uuid
  }
}

autoSwitchToURLBackendIfExists()

onMounted(() => {
  // 核心修改：强制应用 luxury 主题，不再监听 store
  document.body.setAttribute('data-theme', 'luxury')
  // 等待 DOM 渲染以获取正确的颜色
  requestAnimationFrame(setThemeColor)
})

const blurClass = computed(() => {
  if (!backgroundImage.value || blurIntensity.value === 0) return ''
  return `blur-intensity-${blurIntensity.value}`
})
</script>

<template>
  <div
    ref="app"
    id="app-content"
    :class="[
      'bg-base-100 flex h-dvh w-screen overflow-hidden',
      backgroundImage &&
        `custom-background-${dashboardTransparent} custom-background bg-cover bg-center`,
      blurClass,
    ]"
    :style="backgroundImage"
  >
    <RouterView />
    <div
      ref="toast"
      class="toast-sm toast toast-end toast-top z-9999 max-w-80 text-sm md:max-w-96 md:translate-y-8"
    />
  </div>
</template>
