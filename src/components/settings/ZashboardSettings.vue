<template>
  <div
    v-if="hasVisibleItems"
    class="relative flex flex-col gap-2 p-4 text-sm"
  >
    <div class="settings-title">
      <div class="indicator">
        <a
          href="https://github.com/Zephyruso/zashboard"
          target="_blank"
        >
          <span> zashboard </span>
          <span class="text-sm font-normal">
            <span
              v-if="commitId"
              class="text-xs"
            >
              {{ commitId }}
            </span>
          </span>
        </a>
      </div>
      <button
        class="btn btn-sm absolute top-2 right-2"
        @click="refreshPages"
        v-if="isPWA"
      >
        {{ $t('refresh') }}
        <ArrowPathIcon class="h-4 w-4" />
      </button>
    </div>

    <div class="settings-grid">
      <LanguageSelect
        v-if="!hiddenSettingsItems[`${SETTINGS_MENU_KEY.general}.zashboardSettings.language`]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import LanguageSelect from '@/components/settings/LanguageSelect.vue'
import { SETTINGS_MENU_KEY } from '@/constant'
import { isPWA } from '@/helper/utils'
import { hiddenSettingsItems } from '@/store/settings'
import { ArrowPathIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue'

// 检查是否有可见的子项 (大幅简化)
const hasVisibleItems = computed(() => {
  return !hiddenSettingsItems.value[`${SETTINGS_MENU_KEY.general}.zashboardSettings.language`]
})

const commitId = __COMMIT_ID__

const refreshPages = async () => {
  const registrations = await navigator.serviceWorker.getRegistrations()

  for (const registration of registrations) {
    registration.unregister()
  }
  window.location.reload()
}
</script>