<template>
  <div>
    <ul>
      <li
        v-for="(eachTodo, index) in todos"
        :key="index"
        @click="selected !== index ? ((selected = index), (todo = eachTodo.name)) : ((selected = null), (todo = ''))"
        class="todo"
        :class="index === selected ? 'selected' : ''"
      >
        <button v-if="selected === index" @click.stop="deleteTask(index)">asdas</button>
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
import { ref } from 'vue'

const todos = ref<{ name: string; id: number }[]>([])
const todo = ref<string>('')
const selected = ref<number | null>(null)

const setNewTodo = () => {
  todos.value.push({ name: todo.value, id: todos.value.length })
  todo.value = ''
}
const deleteTask = (index: number) => {
  todos.value.splice(index, 1)
}
</script>

<style scoped>
ul {
  list-style: none;
}

.selected {
  background-color: red;
}
</style>
