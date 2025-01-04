<script setup lang="ts">
const client = useSanctumClient()
const { login } = useSanctumAuth()

interface RegisterData {
  name: string
  email: string
  password: string
  password_confirm: string
}

const submitHandler = async (data: RegisterData) => {
  await client('api/register', {
    method: 'POST',
    body: {
      ...data,
      password_confirmation: data.password_confirm,
    },
  })

  await login({
    email: data.email,
    password: data.password,
  })
}
</script>

<template>
  <div class="flex justify-center py-12">
    <div class="min-w-96 bg-gray-700 rounded p-8">
      <h1 class="text-3xl text-center mb-2 font-semibold">
        Register
      </h1>
      <FormKit
        id="registration-form"
        type="form"
        submit-label="Register"
        :actions="false"
        @submit="submitHandler"
      >
        <FormKit
          type="text"
          name="name"
          label="Your name"
          placeholder="Jane Doe"
          help="What do people call you?"
          validation="required"
        />
        <FormKit
          type="text"
          name="email"
          label="Your email"
          placeholder="jane@example.com"
          help="What email should we use?"
          validation="required|email"
        />
        <div class="double">
          <FormKit
            type="password"
            name="password"
            label="Password"
            validation="required|length:6|matches:/[^a-zA-Z]/"
            :validation-messages="{
              matches: 'Please include at least one symbol',
            }"
            placeholder="Your password"
            help="Choose a password"
          />
          <FormKit
            type="password"
            name="password_confirm"
            label="Confirm password"
            placeholder="Confirm password"
            validation="required|confirm"
            help="Confirm your password"
          />
        </div>

        <FormKit
          type="submit"
          label="Register"
        />
      </FormKit>
      <div class="flex justify-center">
        <p>Already have an account?</p>
        <NuxtLink
          to="/login"
          class="text-blue-400 hover:underline ml-1"
        >
          Login
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
