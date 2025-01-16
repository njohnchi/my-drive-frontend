<script setup lang="ts">

</script>

<template>
  <div class="h-screen w-screen bg-gray-700">
    <UiHeader />

    <div class="flex justify-start p-3">
      <div class="hidden sm:flex w-56 mr-8">
        <UiSideBar />
      </div>
      <main class="flex-1">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>

</style>
