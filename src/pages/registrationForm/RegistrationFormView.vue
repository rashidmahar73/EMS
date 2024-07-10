<script setup lang="ts">
import { reactive, ref } from 'vue'
import router from '@/router'
import store from '@/store'
import { SpinnerView, ToastView } from '@/components'
import styles from './styles.module.scss'

const username = ref('')
const email = ref('')
const phoneNumber = ref('')
const message = reactive({
  value: ''
})

let isUserSubmitted = false

const registerUser = () => {
  isUserSubmitted = true
  const data = {
    username: username.value,
    email: email.value,
    phoneNumber: phoneNumber.value
  }

  const selectedEvent = store.state.selectedEvent
  let bookedEvent = store.state.bookedEvent

  if (Object.keys(selectedEvent)?.length <= 0) {
    setTimeout(() => {
      message.value = ''
      router.push('/')
    }, 3000)
    message.value = 'Please Select Event First'
    isUserSubmitted = false
    return
  }
  // Find index of user in bookedEvent array
  const userIndex = bookedEvent.findIndex((user: any) => user?.username === data?.username)

  if (userIndex !== -1) {
    // User exists, update their booked events
    bookedEvent[userIndex].event.push(selectedEvent)
  } else {
    // User does not exist, create a new entry
    store.commit('bookedEvent', {
      ...data,
      event: [selectedEvent]
    })
  }

  store.commit('addCurrentUser', data)

  setTimeout(() => {
    message.value = 'Event Registered Successfully'
  }, 2000)

  setTimeout(() => {
    message.value = ''
    router.push('/confirmedRegistration')
  }, 3000)

  // Reset form after submission
  username.value = ''
  email.value = ''
  phoneNumber.value = ''
}
setTimeout(() => {
  isUserSubmitted = false
}, 1000)
console.log(message.value, 'home')
</script>

<template>
  <div :class="styles.registrationContainer">
    <h1 :class="styles.registrationHeading">Event Registration Form</h1>
    <div :class="styles.hrLine">
      <hr />
    </div>
    <h2 :class="styles.attendeeInfo">Attendee Information</h2>
    <h3 :class="styles.formHeading">Please Fill the Form</h3>
    <SpinnerView :isTrue="isUserSubmitted" />
    <ToastView :message="message.value" />
    <form :class="styles.registerationForm" @submit.prevent="registerUser">
      <label for="username">Username :</label>
      <input type="text" id="username" v-model="username" required />

      <label for="email">Email :</label>
      <input type="email" id="emaik" v-model="email" required />

      <label for="phoneNumber">Phone Number :</label>
      <input type="number" id="phoneNumber" v-model="phoneNumber" required />
      <div :class="styles.btnParent">
        <button type="submit">Submit</button>
      </div>
    </form>
    <Confirmation />
  </div>
</template>
