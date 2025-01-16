<script setup lang="ts">

</script>

<template>
  <nav class="flex-1 flex flex-col">
    <UButton
      color="primary"
      label="Create New"
      variant="solid"
      size="xl"
      block
      :ui="{ font: 'font-bold' }"
    />
    <div class="ml-3 mt-4">
      <ULink
        to="/"
        class="block p-2 text-gray-300 hover:text-primary"
      >
        My files
      </ULink>
      <ULink
        to="/"
        class="block p-2 text-gray-300 hover:text-primary"
      >
        Shared with me
      </ULink>
      <ULink
        to="/"
        class="block p-2 text-gray-300 hover:text-primary"
      >
        Shared by me
      </ULink>
      <ULink
        to="/"
        class="block p-2 text-gray-300 hover:text-primary"
      >
        Trash
      </ULink>
    </div>
  </nav>
</template>

<style scoped>

</style>
