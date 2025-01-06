<script setup lang="ts">
const { logout } = useSanctumAuth()
await logout()
useRouter().replace('/login')
</script>

<template>
  <p>logging out...</p>
</template>

<style scoped>

</style>
