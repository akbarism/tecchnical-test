<script setup>
defineProps({
  isOpen: Boolean,
});
const emit = defineEmits(["open-sidebar"]);
</script>
<template>
  <div class="bg-white shadow pt-[26px] pb-[13px] pl-9">
    <button class="border block lg:hidden" @click="emit('open-sidebar')">
      tes toggle
    </button>
    <h1 class="font-semibold text-[17px] leading-[20.57px] text-[#080808]">
      Conversion
    </h1>
  </div>
</template>
