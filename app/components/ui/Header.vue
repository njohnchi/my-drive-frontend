<script setup lang="ts">

</script>

<template>
  <header class="flex items-center justify-between p-4">
    <UiMobileMenu />

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
      <UiProfileDropdown />
    </div>
  </header>
</template>

<style scoped>

</style>
