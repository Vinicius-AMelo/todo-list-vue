<template>
  <div>
    <ul>
      <li
        v-for="(eachTodo, index) in todos"
        :key="index"
        @click="
          selected !== index
            ? ((selected = index), (todo = eachTodo.name))
            : ((selected = null), (todo = ''))
        "
        class="todo"
        :class="index === selected ? 'selected' : ''"
      >
        <button v-if="selected === index" @click.stop="deleteTask(index)">
          asdas
        </button>
        {{ eachTodo.name }}
      </li>
    </ul>

    <form @submit.prevent="setNewTodo()">
      <input type="text" v-model="todo" />
      <button type="submit">Adicionar tarefa</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue'

interface ITodos {
  name: string
  id: number
}

const todos = ref<ITodos[]>([])
const todo = ref<string>('')
const selected = ref<number | null>(null)

const setNewTodo = () => {
  if (selected.value || selected.value === 0) {
    todos.value[selected.value].name = todo.value
    selected.value = null
  } else {
    todos.value.push({ name: todo.value, id: todos.value.length })
  }
  todo.value = ''
}

const deleteTask = (index: number) => {
  todos.value.splice(index, 1)
}

onMounted(() => {
  const existingTodos = localStorage.getItem('Notas')
  if (existingTodos) {
    todos.value = JSON.parse(existingTodos)
  } else {
    todos.value = []
  }
})
onUpdated(() => {
  localStorage.setItem('Notas', JSON.stringify(todos.value))
})
</script>

<style scoped>
ul {
  list-style: none;
}

.selected {
  background-color: red;
}
</style>
