import {createStore} from 'vuex'

export const store = createStore({
  state() {
    return {
      tasks: [],
      counter: 0
    }
  },
  mutations: {
    addTask(state, payload) {
      state.counter++
      payload.id = state.counter
      state.tasks.push(payload)
    }
  },
  getters: {
    getTasks(state) {
      return state.tasks
    },
    getCount(state) {
      return state.tasks.length
    }
  }
})
