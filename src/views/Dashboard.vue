<script setup>
import { ref } from "vue";
import Status from "../components/Status.vue";

const statusList = ref([
  {
    id: 1,
    status: "Pending",
    price: "2.480,30",
    percent: "2,15%",
    month: "Last Month",
    logo_status: "hara_status_up.svg",
    style: "up",
  },
  {
    id: 1,
    status: "Paid",
    price: "84.310",
    percent: "1,10%",
    month: "Last Month",
    logo_status: "hara_status_down.svg",
    style: "down",
  },
  {
    id: 1,
    status: "Rejected",
    price: "12.155",
    percent: "2,15%",
    month: "Last Month",
    logo_status: "hara_status_up.svg",
    style: "up",
  },
]);
</script>

<template>
  <main class="mt-7">
    <section class="status flex mb-8">
      <Status
        v-for="status in statusList"
        :key="status.id"
        :status="status.status"
        :price="status.price"
        :percent="status.percent"
        :month="status.month"
        :logo_status="status.logo_status"
        :percent_style="status.style"
        class="mr-4"
      />
    </section>
    <section class="table_list">
      <h1>coba</h1>
    </section>
  </main>
</template>
