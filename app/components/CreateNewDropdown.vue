<script setup lang="ts">
import type { DropdownItem } from '#ui/types'

const items: DropdownItem[][] = [
  [{
    label: 'New Folder',
    icon: 'i-heroicons:folder-plus',
  }], [{
    label: 'Upload Files',
    icon: 'i-hugeicons:file-upload',
  }, {
    label: 'Upload Folder',
    icon: 'i-hugeicons:folder-upload',
  }],
]
</script>

<template>
  <UDropdown
    :items="items"
    :ui="{ item: { disabled: 'cursor-text select-text' } }"
    :popper="{ placement: 'bottom-start' }"
  >
    <UButton
      color="primary"
      label="Create New"
      variant="solid"
      size="xl"
      block
      :ui="{ font: 'font-bold' }"
    />
  </UDropdown>
</template>

<style scoped>

</style>
