<template>
  <h2>To Do App</h2>
  <div class="conteudo">
    <form @submit.prevent="setNewTodo()">
      <input type="text" v-model="todo" />
      <button type="submit">
        <font-awesome-icon v-if="selected === null" icon="fa-solid fa-plus" />
        <font-awesome-icon v-if="selected !== null" icon="fa-solid fa-pencil" />
      </button>
    </form>
    <hr />
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
  if (!todo.value) {
    return
  } else if (selected.value !== null) {
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

<style scoped lang="sass">
@import '../assets/_mixins'

h2
  font-weight: 400
  font-size: 40px
  color: #112D4E
  text-align: center
.conteudo
  width: 100%

  form
    margin: 10px auto
    width: 300px

  input
    width: 255px
    height: 32px
    border: none
    border-radius: 5px 0 0 5px
    background-color: #DBE2EF
    padding-left: 15px
    color: #7B7B7B

  button
    width: 45px
    height: 32px
    border: none
    border-radius: 0 5px 5px 0
    background-color: #3F72AF
    color: #ffffff
    cursor: pointer

  hr
    margin-bottom: 10px

  ul
    list-style: none

    .todo
      display: flex
      justify-content: space-between
      align-items: center
      padding: 10px 30px 10px 10px
      background-color: #DBE2EF
      border-radius: 5px
      height: 55px
      margin-bottom: 10px

      &:hover
        border: 1px solid #3F72AF


      &.selected
        border: 3px solid #3F72AF

        svg
          font-size: 20px
          cursor: pointer
          color: #3F72AF
</style>
