<script setup>
import Appbar from "../components/Appbar/Appbar.vue";
import Sidebar from "../components/Sidebar/Sidebar.vue";
import { onMounted, ref, watch } from "vue";

const isSidebarVisible = ref(true);
const screenWidth = ref(window.innerWidth);
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};

// onMounted(() => {
//   console.log(screenWidth.value);
// });

watch(screenWidth, () => {
  if (screenWidth.value > 1024) {
    isSidebarVisible.value = true;
  } else {
    isSidebarVisible.value = false;
  }
});
</script>

<template>
  <div class="relative lg:flex min-h-screen">
    <Sidebar v-show="isSidebarVisible" />

    <!-- Main Content -->
    <div class="flex-1">
      <Appbar @open-sidebar="toggleSidebar" />
      <div class="pt-[30px] px-9">
        <slot />
      </div>
    </div>
  </div>
</template>
