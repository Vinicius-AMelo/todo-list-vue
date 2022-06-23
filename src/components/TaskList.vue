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
        {{ eachTodo.name }}
        <font-awesome-icon
          v-if="selected === index"
          @click.stop="deleteTask(index)"
          class="joca"
          icon="fa-solid fa-trash-can"
        />
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

    .joca {
    }
  }
}
</style>
