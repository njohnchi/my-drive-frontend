<script setup lang="ts">
definePageMeta({
  sanctum: {
    guestOnly: true,
  },
})

const { login } = useSanctumAuth()

interface LoginData {
  email: string
  password: string
  remember: boolean
}

const submitHandler = async (data: LoginData) => {
  await login(data)
}
</script>

<template>
  <div class="flex justify-center py-12">
    <div class="min-w-96 bg-gray-700 rounded p-8">
      <h1 class="text-3xl text-center mb-2 font-semibold">
        Login
      </h1>
      <FormKit
        id="login-form"
        type="form"
        submit-label="Login"
        :actions="false"
        @submit="submitHandler"
      >
        <FormKit
          type="text"
          name="email"
          label="Your email"
          placeholder="jane@example.com"
          help="What email should we use?"
          validation="required|email"
        />
        <FormKit
          type="password"
          name="password"
          label="Password"
          validation="required|length:6|matches:/[^a-zA-Z]/"
          :validation-messages="{
            matches: 'Please include at least one symbol',
          }"
          placeholder="Your password"
          help="Enter your password"
        />
        <FormKit
          type="checkbox"
          name="remember"
          label="Remember me"
        />

        <FormKit
          type="submit"
          label="Login"
        />
      </FormKit>
      <div class="flex justify-center">
        <p>Do not have an account?</p>
        <NuxtLink
          to="/register"
          class="text-blue-400 hover:underline ml-1"
        >
          Register
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
