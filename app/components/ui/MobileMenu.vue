<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
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

        <UiSideBar />
      </div>
    </USlideover>
  </div>
</template>

<style scoped>

</style>
