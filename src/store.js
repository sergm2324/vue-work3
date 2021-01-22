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
      localStorage.removeItem('tasks')
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    changeType(state, payload) {
      state.tasks.find(e => e.id === payload.id).type = payload.type
      localStorage.removeItem('tasks')
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  getters: {
    getTasks(state) {
      return state.tasks
    },
    getCountActive(state) {
      const raw = JSON.parse(localStorage.getItem('tasks'))
      if (raw && raw.length > 0) {
        return raw.filter(e => e.type === 'Активен').length
      } else {
        return state.tasks.filter(e => e.type === 'Активен').length
      }
    }
  }
})
