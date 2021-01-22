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
      payload.type = 'Активен'
      state.tasks.push(payload)
    },
    changeType(state, payload) {
      state.tasks.find(e => e.id === payload.id).type = payload.type
    }
  },
  getters: {
    getTasks(state) {
      return state.tasks
    },
    getCountActive(state) {
      const active = state.tasks.filter(e => e.type === 'Активен')
      return active.length
    }
  }
})
