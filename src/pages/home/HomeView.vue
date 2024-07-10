<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import router from '@/router'
import store from '@/store'
import { CarouselView, NavbarView, SpinnerView } from '@/components'
import { ApiHandler, truncateText } from '@/utils'
import { dummyData } from './helpers'
import type { eventData, eventsResponseType } from './types'
import styles from './styles.module.scss'

//  Define the dummy events data
// const events = ref(dummyData)

const events = ref<eventData[]>([])
const isLoading = reactive({
  loading: false
})

// Log the events data when the component is mounted

onMounted(async () => {
  isLoading.loading = true
  const params = {
    query: 'Concerts in San Francisco',
    date: 'any',
    is_virtual: 'false',
    start: '0'
  }
  // api call
  const response = await ApiHandler({
    method: 'GET',
    url: 'search-events',
    params: params
  })
  // modify the data
  const eventsList = response?.data?.data?.map((item: eventsResponseType, index: number) => {
    const copyItem = { ...item }
    return {
      id: index,
      eventName: copyItem?.name,
      date: copyItem?.start_time?.split(' ')?.[0],
      location: copyItem?.venue?.full_address,
      thumbnail: copyItem?.thumbnail
    }
  })
  // event data
  events.value = eventsList || []
  isLoading.loading = false
})
function registrationHandler(event: eventData) {
  // vuex store state event details object added
  store.commit('addEvent', event)
  return router.push('/registrationForm')
}
</script>

<template>
  <main>
    <NavbarView />
    <CarouselView />
    <div>
      <h1 :class="styles.heading">Upcoming Events</h1>
    </div>
    <div>
      <SpinnerView :isTrue="isLoading.loading" />
      <div :class="styles.eventListContainer">
        <div :class="styles.eventChildContainer" v-for="event in events" :key="event.id">
          <img :class="styles.eventImage" :src="event.thumbnail" alt="thumbail" />
          <div :class="styles.detailsContainer">
            <h1 :class="styles.eventHeading">{{ event.eventName }}</h1>
            <h2 :class="styles.date">{{ event.date }}</h2>
            <p :title="event.location" :class="styles.location">
              {{ truncateText(event.location, 50) }}
            </p>

            <button :class="styles.registerBtn" v-on:click="registrationHandler(event)">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
