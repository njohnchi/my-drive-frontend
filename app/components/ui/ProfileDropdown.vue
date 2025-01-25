<script setup lang="ts">
import type { User } from '~~/models/user'
import type { DropdownItem } from '#ui/types'

const user = useSanctumUser<User>()
const items: DropdownItem[][] = [
  [{
    label: user.value?.email as string,
    slot: 'account',
    disabled: true,
  }], [{
    label: 'Profile',
    icon: 'i-heroicons-user',
    click: () => { navigateTo('/') },
  }], [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    click: () => { navigateTo('/logout') },
  }],
]
</script>

<template>
  <UDropdown
    :items="items"
    :ui="{ item: { disabled: 'cursor-text select-text' } }"
    :popper="{ placement: 'bottom-start' }"
  >
    <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />

    <template #account="{ item }">
      <div class="w-full flex flex-col items-center justify-center">
        <p>
          Signed in as
        </p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
      </div>
    </template>

    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>

      <UIcon
        :name="item.icon"
        class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"
      />
    </template>
  </UDropdown>
</template>

<style scoped>

</style>
