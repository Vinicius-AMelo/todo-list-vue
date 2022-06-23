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
  padding: 30px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-weight: bolder;
  font-size: 22px;
}
</style>
