<template>
  <div class="card" v-if="task">
    <h2>{{task.title}}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.type" /></p>
    <p><strong>Дэдлайн</strong>: {{new Date(task.date).toLocaleDateString('ru-RU')}}</p>
    <p><strong>Описание</strong>: {{task.description}}</p>
    <div>
      <button class="btn" @click="changeType({id: task.id, type: 'Выполняется'})">Взять в работу</button>
      <button class="btn primary" @click="changeType({id: task.id, type: 'Завершен'})">Завершить</button>
      <button class="btn danger" @click="changeType({id: task.id, type: 'Отменен'})">Отменить</button>
    </div>
  </div>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {computed} from 'vue'
import { useStore } from 'vuex'

export default {
  props: ['taskId'],
  setup(props) {
    const store = useStore()

    return {
      task: computed(() => store.getters.getTasks.find(e => e.id === +props.taskId)).value,
      changeType: (payload) => store.commit('changeType', payload)
    }

  },
  components: {AppStatus}
}
</script>

<style scoped>

</style>
