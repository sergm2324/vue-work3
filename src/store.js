import {createStore} from 'vuex'

export const store = createStore({
  state() {
    return {
      tasks: []
    }
  },
  mutations: {
    addTask(state, payload) {
      state.tasks.push({name: payload})
    }
  },
  getters: {
    getTasks(state) {
      return state.tasks
    }
  }
})
