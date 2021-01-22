<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const raw = JSON.parse(localStorage.getItem('tasks'))
    if (raw && raw.length > 0) {
      store.state.tasks = raw
      store.state.counter = raw.length
    }
  },
  components: {
    TheNavbar
  }
}
</script>

<style>

</style>
