<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["modal-close"]);

const target = ref(null);
onClickOutside(target, () => emit("modal-close"));
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed top-0 flex justify-center items-center z-50 left-0 w-full h-screen bg-black bg-opacity-50 px-5"
  >
    <div class="flex justify-center sm:px-4">
      <div class="max-w-max bg-white rounded-lg shadow-md" ref="target">
        <div class="modal-header">
          <slot name="header"> default header </slot>
        </div>
        <div class="">
          <slot name="content"> default content </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
