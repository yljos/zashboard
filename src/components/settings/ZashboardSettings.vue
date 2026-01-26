<template>
  <div
    v-if="hasVisibleItems"
    class="relative flex flex-col gap-2 p-4 text-sm"
  >
    <div class="settings-title">
      <div class="indicator">
        <span
          v-if="isUIUpdateAvailable"
          class="indicator-item top-1 -right-1 flex"
        >
          <span class="bg-secondary absolute h-2 w-2 animate-ping rounded-full"></span>
          <span class="bg-secondary h-2 w-2 rounded-full"></span>
        </span>
        <a
          href="https://github.com/Zephyruso/zashboard"
          target="_blank"
        >
          <span> zashboard </span>
          <span class="text-sm font-normal">
            {{ zashboardVersion }}
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

    <div
      v-if="!hiddenSettingsItems[`${SETTINGS_MENU_KEY.general}.zashboardSettings.upgradeUI`]"
      class="mt-4"
    >
      <button
        :class="
          twMerge('btn btn-primary btn-sm w-full md:w-auto', isUIUpgrading ? 'animate-pulse' : '')
        "
        @click="handlerClickUpgradeUI"
      >
        {{ $t('upgradeUI') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { upgradeUIAPI, zashboardVersion } from '@/api'
import LanguageSelect from '@/components/settings/LanguageSelect.vue'
import { useSettings } from '@/composables/settings'
import { SETTINGS_MENU_KEY } from '@/constant'
import { handlerUpgradeSuccess } from '@/helper'
import { isPWA } from '@/helper/utils'
import { hiddenSettingsItems } from '@/store/settings'
import { ArrowPathIcon } from '@heroicons/vue/24/outline'
import { twMerge } from 'tailwind-merge'
import { computed, ref } from 'vue'

// 检查是否有可见的子项 (大幅简化)
const hasVisibleItems = computed(() => {
  return (
    !hiddenSettingsItems.value[`${SETTINGS_MENU_KEY.general}.zashboardSettings.language`] ||
    !hiddenSettingsItems.value[`${SETTINGS_MENU_KEY.general}.zashboardSettings.upgradeUI`]
  )
})

const commitId = __COMMIT_ID__
const { isUIUpdateAvailable } = useSettings()

const isUIUpgrading = ref(false)
const handlerClickUpgradeUI = async () => {
  if (isUIUpgrading.value) return
  isUIUpgrading.value = true
  try {
    await upgradeUIAPI()
    isUIUpgrading.value = false
    handlerUpgradeSuccess()
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  } catch {
    isUIUpgrading.value = false
  }
}

const refreshPages = async () => {
  const registrations = await navigator.serviceWorker.getRegistrations()

  for (const registration of registrations) {
    registration.unregister()
  }
  window.location.reload()
}
</script>
