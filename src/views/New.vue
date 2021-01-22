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

    <router-link :to="'/'">
      <button type="submit" :disabled = "valid" class="btn primary" @click="addTask({title, date, description})">Создать</button>
    </router-link>
  </form>
</template>


<script>
import { ref, computed} from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const title = ref('')
    const date = ref('')
    const description = ref('')

    const store = useStore()
    const valid = computed(() => (title.value.length === 0 || date.value.length === 0 || description.value.length === 0))

    return {
      title,
      date,
      description,
      valid,
      addTask: (payload) => store.commit('addTask', payload),
    }
  }
}
</script>
