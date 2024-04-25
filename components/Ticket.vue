<script setup lang="ts">
import type { TicketInsert } from '~/server/utils/drizzle';

const { user, clear } = useUserSession()

const { data: ticket, refresh } = await useFetch('/api/tickets', { query: { username: user.value?.username } })

onMounted(async () => {
  console.log(ticket.value)
  if (ticket.value) {
    return
  }
  const ticketBody: Omit<TicketInsert, 'createdAt'> = user.value!
  await $fetch('/api/tickets', { method: 'POST', body: ticketBody })
  refresh()
})
</script>

<template>
  <button @click="clear">Logout</button>

  <div flex="~ wrap gap-32" mx-32>

    <div max-w-400>
      <h1 text-28>See you online on June 28</h1>
      <p >Keep sharing to max out your chances of wining 1,000,000 NIM and other limited swag</p>    
      
      <a mt-12 href="https://twitter.com/intent/tweet?text=I%20just%20joined%20the%20Nimiq%20Conference%20and%20I%20want%20to%20win%201,000,000%20NIM%20and%20other%20limited%20swag.%20Join%20me%20at%20https://nimiq.com/conference" target="_blank" rel="noopener noreferrer" pill-blue arrow>
        Share on X
      </a>
      
      <p>We go live in:</p>
      <div>3 months 12 days 7 hours 41 seconds</div>
    </div>
  <div bg-gradient-neutral rounded-6 p-24 min-w-320 h-max>
    <img :src="user?.avatar" alt="Ticket" size-40 rounded-full />
    <p text-neutral-100 mt-64>{{ user?.name }}</p>
    <p text-neutral-500>@{{ user?.username }}</p>

  </div>
  </div>

  <!-- <TresTicket />  -->
</template>
