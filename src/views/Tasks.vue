<template>
  <h1 class="text-white center" v-if="tasks.length === 0">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{count}}</h3>
    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{task.title}}
        <AppStatus :type="'done'" />
      </h2>
      <p>
        <strong>
          <small>
            {{new Date(task.date).toLocaleDateString('ru-RU')}}
          </small>
        </strong>
      </p>
      <router-link :to="'/task/' + task.id">
        <button class="btn primary">Посмотреть</button>
      </router-link>
    </div>
  </template>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { computed, provide } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()

    return {
      tasks: computed(() => store.getters.getTasks),
      count: computed(() => store.getters.getCount)
    }
  },
  components: {AppStatus}
}
</script>
