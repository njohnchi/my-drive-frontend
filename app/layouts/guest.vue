<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col items-center py-12">
    <header>
      <h1 class="text-3xl uppercase font-bold text-primary mb-3">
        <ULink to="/">My Drive</ULink>
      </h1>
    </header>
    <div class="min-w-96 bg-gray-700 rounded p-8">
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>

</style>
