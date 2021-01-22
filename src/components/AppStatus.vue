<template>
  <span :class="['badge', color]">{{type}}</span>
</template>

<script>
import {computed} from "vue";

export default {
  props: ['type'],
  setup(props) {
    const types = [
      {type: 'Активен', class: 'primary'},
      {type: 'Выполняется', class: 'warning'},
      {type: 'Завершен', class: 'primary'},
      {type: 'Отменен', class: 'danger'}
    ]
    const type = computed(() => props.type)
    const color = computed(() => types.find(e => e.type === type.value).class)
    return {
      type,
      color
    }
  }
}
</script>
