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
      if (new Date(payload.date).getDate() < new Date().getDate()) {
        payload.type = 'Отменен'
      } else {
        payload.type = 'Активен'
      }
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
