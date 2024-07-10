import { createStore } from 'vuex'

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
    addEvent(state: any, user: any) {
      state.selectedEvent = { ...user }
    },
    addCurrentUser(state: any, user: any) {
      state.currentUser = { ...user }
    },
    bookedEvent(state: any, user: any) {
      state.bookedEvent.push(user)
    }
  }
})
export default store
