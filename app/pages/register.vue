<script setup lang="ts">
import { FetchError } from 'ofetch'
import type { FormKitNode } from '@formkit/core'

definePageMeta({
  layout: 'guest',
  sanctum: {
    guestOnly: true,
  },
})

interface RegisterData {
  name: string
  email: string
  password: string
  password_confirm: string
}

const client = useSanctumClient()
const { refreshIdentity } = useSanctumAuth()

const submitHandler = async (data: RegisterData, node?: FormKitNode) => {
  try {
    await client('api/register', {
      method: 'POST',
      body: {
        ...data,
        password_confirmation: data.password_confirm,
      },
    })

    await refreshIdentity()
    navigateTo('/')
  }
  catch (error) {
    if (error instanceof FetchError && error.response?.status === 422) {
      node?.setErrors([], error.data.errors)
    }
    else {
      node?.setErrors(['An error occurred. Please try again.'])
    }
  }
}
</script>

<template>
  <h1 class="text-2xl text-center mb-2 font-semibold">
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
    <ULink
      to="/login"
      class="text-primary hover:underline ml-1"
    >
      Login
    </ULink>
  </div>
</template>
