<script setup lang="ts">
import TaskList from './components/TaskList.vue'
</script>

<template>
  <main class="content">
    <TaskList />
  </main>
</template>

<style lang="scss">
@import './assets/base.scss';

.content {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 30px;
  overflow: hidden;
}
</style>
