<script setup>
import { sideBarContent } from "./sideBar.constant";
import { useRouter, RouterLink } from "vue-router";

const router = useRouter();

defineProps({
  isSidebarVisible: {
    type: Boolean,
  },
});
</script>

<template>
  <div
    class="bg-white text-red-100 w-full lg:w-[281px] border pt-8 pl-4 pr-4 sm:pl-9 sm:pr-9 shadow-md"
  >
    <h1
      class="font-extrabold text-3xl leading-[30px] text-[#152544] mb-8 sm:mb-0"
    >
      heylink.
    </h1>
    <div class="sm:pt-8">
      <ul
        v-for="itemSide in sideBarContent"
        :key="itemSide.title"
        class="pr-[11px] sm:pr-0"
      >
        <RouterLink :to="itemSide.to">
          <div
            :class="[
              'flex',
              'items-center',
              'gap-[10px]',
              'cursor-pointer',
              'py-[13px]',
              'lg:pl-2',
              'hover:bg-[#E3F2FD]',
              'mb-2',
              'rounded-lg',
              {
                'bg-[#E3F2FD]': router.currentRoute.value.path === itemSide.to,
              },
            ]"
          >
            <img
              :src="`../../../${itemSide.icon}`"
              alt=""
              class="hidden sm:block"
            />
            <h1 class="text-base font-medium leading-[19.36px] text-[#424242]">
              {{ itemSide.title }}
            </h1>
          </div>
        </RouterLink>
      </ul>
    </div>
  </div>
</template>
