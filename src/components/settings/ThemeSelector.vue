<template>
  <div
    class="join-item input input-sm inline w-48 p-0"
    @click="theme = 'luxury'"
  >
    <div class="flex h-full w-full cursor-pointer items-center indent-4">
      {{ theme }}
    </div>
  </div>
</template>

<script setup lang="ts">
const theme = defineModel<string>('value', {
  type: String,
  required: true,
})
</script>
