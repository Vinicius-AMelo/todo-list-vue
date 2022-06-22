<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <main class="content">
    <HelloWorld msg="todo list" />
  </main>
</template>

<style>
@import './assets/base.css';

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
