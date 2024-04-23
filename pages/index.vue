<script setup>
useDark()
const { loggedIn } = useUserSession()
</script>

<template>
  <main mx-auto max-w-1200 pt-16>
    <Ticket v-if="loggedIn" />
    <div v-else>
      <h1>Not logged in</h1>
      <a href="/auth/github" pill-blue arrow mt-16>Login with GitHub</a>
    </div>
  </main>
</template>
