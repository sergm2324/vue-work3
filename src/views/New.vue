<template>
  <form class="card" @submit.prevent="addTask({title, date, description})">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" v-model = "title" id="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" v-model = "date" id="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model = "description"></textarea>
    </div>

    <button class="btn primary">Создать</button>
  </form>
</template>


<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const title = ref('')
    const date = ref('')
    const description = ref('')

    const store = useStore()

    return {
      title,
      date,
      description,
      addTask: (payload) => store.commit('addTask', payload),
    }
  }
}
</script>
