<template>
  <h2>Todo List</h2>
  <div>
    <form @submit.prevent="setNewTodo()">
      <input type="text" v-model="todo" />
      <button type="submit">Adicionar tarefa</button>
    </form>

    <ul>
      <li
        v-for="(eachTodo, index) in todos"
        :key="index"
        @click="
          selected === index
            ? ((selected = null), (todo = ''))
            : ((selected = index), (todo = eachTodo))
        "
        class="todo"
        :class="index === selected ? 'selected' : ''"
      >
        {{ eachTodo }}
        <font-awesome-icon
          v-if="selected === index"
          @click.stop="deleteTask(index)"
          icon="fa-solid fa-trash-can"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue'

const todos = ref<string[]>([])
const todo = ref<string>('')
const selected = ref<number | null>(null)

function setNewTodo() {
  if (selected.value || selected.value === 0) {
    todos.value[selected.value] = todo.value
    selected.value = null
  } else {
    todos.value.push(todo.value)
  }
  todo.value = ''
}
function deleteTask(index: number) {
  todos.value.splice(index, 1)
  selected.value = null
  todo.value = ''
}

onMounted(() => {
  const existingTodos = localStorage.getItem('Notas') || ''
  todos.value = JSON.parse(existingTodos) || []
})
onUpdated(() => {
  localStorage.setItem('Notas', JSON.stringify(todos.value))
})
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  .todo {
    display: flex;
    justify-content: space-between;
    &.selected {
      background-color: red;
    }
  }
}
</style>
