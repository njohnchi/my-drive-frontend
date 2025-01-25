<script setup lang="ts">

</script>

<template>
  <nav class="flex-1 flex flex-col">
    <CreateNewDropdown />

    <div class="mt-4">
      <ULink
        to="/my-files"
        active-class="text-primary bg-gray-600 rounded-lg"
        class="block py-2 px-5 text-gray-300 hover:text-primary"
      >
        My files
      </ULink>
      <ULink
        to="/"
        active-class="text-primary bg-gray-600 rounded-lg"
        class="block py-2 px-5 text-gray-300 hover:text-primary"
      >
        Shared with me
      </ULink>
      <ULink
        to="/"
        active-class="text-primary bg-gray-600 rounded-lg"
        class="block py-2 px-5 text-gray-300 hover:text-primary"
      >
        Shared by me
      </ULink>
      <ULink
        to="/trash"
        active-class="text-primary bg-gray-600 rounded-lg"
        class="block py-2 px-5 text-gray-300 hover:text-primary"
      >
        Trash
      </ULink>
    </div>
  </nav>
</template>

<style scoped>

</style>
