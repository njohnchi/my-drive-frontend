<script setup lang="ts">
import type { User } from '~~/models/user'

const user = useSanctumUser<User>()
</script>

<template>
  <div>
    <h1 class="text-3xl">
      Home page
    </h1>
    <p>{{ user?.name }}</p>
    <p>{{ user?.email }}</p>
    <ULink to="/logout">Logout</ULink>
  </div>
</template>

<style scoped>

</style>
