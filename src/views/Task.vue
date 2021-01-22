<template>
  <div class="card" v-if="task">
    <h2>{{task.title}}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="'done'" /></p>
    <p><strong>Дэдлайн</strong>: {{new Date(task.date).toLocaleDateString('ru-RU')}}</p>
    <p><strong>Описание</strong>: {{task.description}}</p>
    <div>
      <button class="btn">Взять в работу</button>
      <button class="btn primary">Завершить</button>
      <button class="btn danger">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center">
    Задачи с id = <strong>Tут АЙДИ</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {computed, inject} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import { useStore } from 'vuex'

export default {
  props: ['taskId'],
  setup(props) {
    const store = useStore()
    return {
      task : computed(() => store.getters.getTasks.find(e => e.id === +props.taskId))
    }

  },
  components: {AppStatus}
}
</script>

<style scoped>

</style>
