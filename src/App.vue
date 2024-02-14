<script setup>
import { useRoute } from "vue-router";
import LayoutDefault from "./layouts/default.vue";
</script>

<template>
  <LayoutDefault>
    <RouterView></RouterView>
  </LayoutDefault>
</template>

<style scoped>
@import "./style.css";
</style>
