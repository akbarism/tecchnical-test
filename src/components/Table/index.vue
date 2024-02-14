<script setup>
import { defineProps } from "vue";

const props = defineProps(["users", "select"]);
const emits = defineEmits(["showDetails"]);

const handleRowClick = (user) => {
  emits("showDetails", user);
};
function convertDateOfBirth(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US");
}
</script>

<template>
  <div class="relative overflow-x-auto">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-[#7C7C7C] font-semibold uppercase bg-[#FAFBFC] py-[18px] leading-[14.52px]"
      >
        <th scope="col" class="px-6 py-[18px]">ID</th>
        <th scope="col" class="px-6 py-[18px]">User</th>
        <th scope="col" class="px-6 py-[18px]">Date of Birth</th>
        <th scope="col" class="px-6 py-[18px]">Email</th>
        <th scope="col" class="px-6 py-[18px]">Job</th>
        <th scope="col" class="px-6 py-[18px]">Country</th>
        <th scope="col" class="px-6 py-[18px]">Action</th>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in users"
          :key="index"
          @click="() => handleRowClick(item)"
          class="bg-white border-b"
        >
          <th
            scope="row"
            class="px-6 py-4 text-xs font-normal whitespace-nowrap"
          >
            {{ item.id }}
          </th>
          <td class="px-6 py-4 flex gap-1 items-center">
            <img :src="item.profile_picture" alt="" width="24" />
            <span class="text-[#080808] font-medium text-xs flex gap-1">
              <!-- {{ item.first_name + " " + item.last_name }} -->

              <p>{{ item.first_name }}</p>
              <p>{{ item.last_name }}</p>
            </span>
          </td>
          <td
            class="px-6 py-4 font-normal text-xs leading-[14.52px] text-[#686868]"
          >
            {{ convertDateOfBirth(item.date_of_birth) }}
          </td>
          <td
            class="px-6 py-4 font-medium text-xs leading-[14.52px] text-[#080808]"
          >
            {{ item.email }}
          </td>
          <td
            class="px-6 py-4 font-normal text-xs leading-[14.52px] text-[#686868]"
          >
            {{ item.job }}
          </td>
          <td
            class="px-6 py-4 font-medium text-xs leading-[14.52px] text-[#080808]"
          >
            {{ item.country }}
          </td>
          <td class="px-6 py-4 flex gap-[10px]">
            <button
              class="border text-[10px] px-4 rounded shadow-sm font-medium leading-[12.1px] text-[#080808] pt-[5px] pb-1"
            >
              select
            </button>
            <button
              class="border text-[10px] flex px-4 rounded shadow-sm font-medium leading-[12.1px] text-[#080808] pt-[5px] pb-1"
            >
              <span>View</span> <span>Detail</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
