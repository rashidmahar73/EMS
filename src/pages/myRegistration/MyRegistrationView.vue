<script setup lang="ts">
import { computed } from 'vue'
import store from '@/store'
import { NavbarView } from '@/components'
import { truncateText } from '@/utils'
import styles from './styles.module.scss'

const bookedEvents = computed(() => store.state.bookedEvent)
</script>
<template>
  <NavbarView />
  <div :class="styles.registeredEvents">
    <h2 :class="styles.sectionTitle">Registered Events Details</h2>
    <div :class="styles.attendeeEvents">
      <div :class="styles.attendeeInfo">
        <div :class="styles.details" v-for="event in bookedEvents" :key="event?.username">
          <p :class="styles.name">Attendee</p>
          <p :class="styles.name">{{ event?.username }}</p>
          <p :class="styles.email">{{ event?.email }}</p>
          <p :class="styles.phone">{{ event?.phoneNumber }}</p>
          <p :class="styles.name">Events</p>
          <ul :class="styles.eventList">
            <li v-for="ev in event?.event" :key="ev.id" :class="styles.eventItem">
              <div :class="styles.eventdetails">
                <strong :class="styles.eventname"> {{ ev?.eventName }}</strong>
                <span :class="styles.eventdate">{{ ev?.date }}</span>
              </div>
              <span :class="styles.eventlocation"> {{ truncateText(ev?.location, 80) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
