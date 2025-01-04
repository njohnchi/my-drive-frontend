<script setup lang="ts">
const { login } = useSanctumAuth()

const credentials = {
  email: 'test@example.com',
  password: 'password',
  remember: true,
}

// await login(credentials)
</script>

<template>
  <h1 class="text-3xl">
    Home page
    <UButton @click="login(credentials)">
      Login
    </UButton>
  </h1>
</template>

<style scoped>

</style>
