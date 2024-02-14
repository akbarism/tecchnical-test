<script setup>
defineProps({
  title: String,
  price: String,
  priceLast: String,
  icon: String,
  iconUp: String,
  percent: String,
});
</script>

<template>
  <div class="border rounded-[10px]">
    <div class="flex justify-between pl-6 pt-6 pr-[18.33px] items-center">
      <h3 class="font-semibold text-xs leading-[14.52px] text-[#727272]">
        {{ title }}
      </h3>
      <div class="border p-[5.95px] rounded bg-[#F2F4F7]">
        <img :src="`../../../${icon}`" alt="" />
      </div>
    </div>
    <div class="pl-6 pt-[10px] pb-[22px]">
      <span class="font-semibold text-xl leading-[24.2px] text-[#080808]"
        >{{ price }}<span class="text-[#9A9A9A]">{{ priceLast }}</span></span
      >
    </div>

    <div class="bg-[#F9FAFC] flex justify-between items-center">
      <div class="flex items-center pl-[17px] pt-[13px] pb-[11.99px]">
        <img :src="`../../../${iconUp}`" alt="" />
        <span
          :class="{ 'text-red-500': percent === '1,10%' }"
          class="font-semibold text-[10px] leading-[12.1px] text-[#4CBF93] pr-[3.57px]"
          >{{ percent }}</span
        >
        <p class="font-medium text-[10px] text-[#AAAAAA]">Last Month</p>
      </div>
      <h1
        class="text-[10px] font-semibold leading-[12.1px] text-[#6E6E6E] pr-[13.08px] pt-4 pb-[16.71px]"
      >
        View More
      </h1>
    </div>
  </div>
</template>
