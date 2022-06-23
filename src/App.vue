<script setup lang="ts">
import TaskList from './components/TaskList.vue'
</script>

<template>
  <main class="content">
    <TaskList />
  </main>
</template>

<style lang="sass">
@import './assets/base.sass'
@import './assets/_mixins'

.content
  width: 100vw
  min-height: 100vh
  background-color: #ffffff
  padding: 30px
  overflow: hidden

  @include desktop
    border-radius: 12px
    width: 600px
    min-height: 600px
</style>
