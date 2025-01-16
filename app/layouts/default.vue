<script setup lang="ts">
const items = [
  [{
    label: 'ben@example.com',
    slot: 'account',
    disabled: true,
  }], [{
    label: 'Settings',
    icon: 'i-heroicons-cog-8-tooth',
  }], [{
    label: 'Documentation',
    icon: 'i-heroicons-book-open',
  }, {
    label: 'Changelog',
    icon: 'i-heroicons-megaphone',
  }, {
    label: 'Status',
    icon: 'i-heroicons-signal',
  }], [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle',
  }],
]

const isOpen = ref(false)
</script>

<template>
  <div class="h-screen w-screen bg-gray-700">
    <header class="flex items-center justify-between p-4">
      <div class="sm:hidden">
        <UButton
          icon="i-material-symbols:lists"
          color="primary"
          square
          variant="solid"
          @click="isOpen = true"
        />

        <USlideover
          v-model="isOpen"
          side="left"
          :ui="{ width: 'max-w-56' }"
        >
          <div class="p-4 flex-1">
            <div class="flex items-center mb-4">
              <UButton
                color="gray"
                variant="ghost"
                size="sm"
                icon="i-heroicons-x-mark-20-solid"
                class="flex sm:hidden absolute end-4 top-4 z-10"
                square
                padded
                @click="isOpen = false"
              />
              <h3 class="text-xl font-semibold text-primary uppercase">
                My drive
              </h3>
            </div>

            <nav class="flex flex-col">
              <UButton
                color="primary"
                label="Create New"
                variant="solid"
                size="xl"
                block
                :ui="{ font: 'font-bold' }"
                @click="isOpen = true"
              />
              <div class="ml-3 mt-4">
                <ULink
                  to="/files"
                  class="block p-2 text-gray-300 hover:text-primary"
                >
                  My files
                </ULink>
                <ULink
                  to="/shared"
                  class="block p-2 text-gray-300 hover:text-primary"
                >
                  Shared with me
                </ULink>
                <ULink
                  to="/shared"
                  class="block p-2 text-gray-300 hover:text-primary"
                >
                  Shared by me
                </ULink>
                <ULink
                  to="/trash"
                  class="block p-2 text-gray-300 hover:text-primary"
                >
                  Trash
                </ULink>
              </div>
            </nav>
          </div>
        </USlideover>
      </div>

      <h1 class="text-3xl text-center text-primary uppercase font-bold sm:w-56">
        <ULink
          to="/"
        >My Drive</ULink>
      </h1>

      <div class="flex-1 hidden sm:flex ml-8">
        <FormKit
          type="text"
          placeholder="Search"
          outer-class="!mb-0 !max-w-[40em]"
        />
      </div>

      <div class="flex items-center justify-center">
        <UDropdown
          :items="items"
          :ui="{ item: { disabled: 'cursor-text select-text' } }"
          :popper="{ placement: 'bottom-start' }"
        >
          <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />

          <template #account="{ item }">
            <div class="text-left">
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
      </div>
    </header>

    <div class="flex justify-start p-3">
      <nav class="hidden sm:flex flex-col w-56 mr-8">
        <UButton
          color="primary"
          label="Create New"
          variant="solid"
          size="xl"
          block
          :ui="{ font: 'font-bold' }"
          @click="isOpen = true"
        />
        <div class="ml-3 mt-4">
          <ULink
            to="/files"
            class="block p-2 text-gray-300 hover:text-primary"
          >
            My files
          </ULink>
          <ULink
            to="/shared"
            class="block p-2 text-gray-300 hover:text-primary"
          >
            Shared with me
          </ULink>
          <ULink
            to="/shared"
            class="block p-2 text-gray-300 hover:text-primary"
          >
            Shared by me
          </ULink>
          <ULink
            to="/trash"
            class="block p-2 text-gray-300 hover:text-primary"
          >
            Trash
          </ULink>
        </div>
      </nav>
      <main class="flex-1">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>

</style>
