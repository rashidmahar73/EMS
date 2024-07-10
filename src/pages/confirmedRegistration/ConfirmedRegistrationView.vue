<script setup lang="ts">
import { computed } from 'vue'
import router from '@/router'
import store from '@/store'
import { TickIcon } from '@/assets/icons'
import { truncateText } from '@/utils'
import styles from './styles.module.scss'

const currentUser = computed(() => store.state.currentUser)
const selectedEvent = computed(() => store.state.selectedEvent)

const backToEvents = () => {
  return router.push('/myRegistration')
}
</script>
<template>
  <div :class="styles.eventsConfirmation">
    <div :class="styles.subContainer">
      <h2 :class="styles.heading">Welcome</h2>
      <div :class="styles.icon">
        <TickIcon />
      </div>
      <span :class="styles.messageParent">
        <h3 :class="styles.message">Your Registration is Completed!</h3>
      </span>
    </div>
    <div :class="styles.detailsWrapper">
      <h1 :class="styles.eventHeading">Event Details</h1>
      <div :class="styles.detailsContainer" v-for="event in [currentUser]" :key="event?.username">
        <h2 :class="styles.text"><span>Attendee Name :</span> {{ event?.username }}</h2>
        <p :class="styles.text"><span>Attendee Email :</span> {{ event?.email }}</p>
        <p :class="styles.text"><span>Phone Number :</span> {{ event?.phoneNumber }}</p>
        <div v-for="ev in [selectedEvent]" :key="ev?.id">
          <p :class="styles.text"><span>Event Name :</span> {{ ev?.eventName }}</p>
          <p :class="styles.text"><span>Event Date :</span> {{ ev?.date }}</p>
          <p :class="styles.text">
            <span>Event Location :</span> {{ truncateText(ev?.location, 50) }}
          </p>
        </div>
        <h1 :class="styles.thankyouMessage">Thank you for registering for this event.</h1>
        <h1 :class="styles.lookForward">We look forward to seeing you at the event.</h1>
      </div>
      <div :class="styles.btnParent">
        <button :class="styles.backToEvents" @click="backToEvents">Back to Events</button>
      </div>
    </div>
  </div>
</template>
