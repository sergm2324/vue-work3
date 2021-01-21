<template>
  <h1 class="text-white center" v-if="tasks.length === 0">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: 0</h3>
    <div class="card" v-for="task in tasks">
      <h2 class="card-title">
        {{task.name}}
        <AppStatus :type="'done'" />
      </h2>
      <p>
        <strong>
          <small>
            {{new Date().toLocaleDateString()}}
          </small>
        </strong>
      </p>
      <button class="btn primary">Посмотреть</button>
    </div>
  </template>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()

    return {
      tasks: computed(() => store.getters.getTasks)
    }
  },
  components: {AppStatus}
}
</script>
