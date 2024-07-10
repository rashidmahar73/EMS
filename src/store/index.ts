import { createStore } from 'vuex'
import type { eventType, userTypes } from './types'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      selectedEvent: {},
      bookedEvent: [],
      currentUser: {}
    }
  },
  mutations: {
    addEvent(state: any, user: eventType) {
      state.selectedEvent = { ...user }
    },
    addCurrentUser(state: any, user: userTypes) {
      state.currentUser = { ...user }
    },
    bookedEvent(state: any, user: any) {
      state.bookedEvent.push(user)
    }
  }
})
export default store
