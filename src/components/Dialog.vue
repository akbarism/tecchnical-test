<script setup>
defineProps({
  userData: Object,
});
</script>

<template>
  <main class="main">
    <div v-if="userData" class="dialog">
      <h1>{{ userData.first_name }}</h1>
    </div>
    <div v-if="userData" class="backdrop"></div>
  </main>
</template>

<style scoped>
.main {
}

.main .dialog {
  background-color: white;
  width: 500px;
  min-height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.main .backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #d9d9d980;
  z-index: 8;
}
</style>
