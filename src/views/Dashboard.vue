<script setup>
import { ref, watchEffect } from "vue";
import Status from "../components/Status.vue";

const usersData = ref([]);

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
    id: 2,
    status: "Paid",
    price: "84.310",
    percent: "1,10%",
    month: "Last Month",
    logo_status: "hara_status_down.svg",
    style: "down",
  },
  {
    id: 3,
    status: "Rejected",
    price: "12.155",
    percent: "2,15%",
    month: "Last Month",
    logo_status: "hara_status_up.svg",
    style: "up",
  },
]);

// Start of Get data from API

watchEffect(async () => {
  try {
    const response = await fetch(
      `https://api.slingacademy.com/v1/sample-data/users`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();

    usersData.value = data.users;

    console.log(usersData.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

// End of Get Data from API
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
    <section class="table_list p-4 rounded-md mr-4 mt-7">
      <h1 class="table_info">User List</h1>
      <table class="table mt-6">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Job</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(data, index) in usersData" :key="data.id">
            <td>{{ index + 1 }}</td>
            <td>{{ data.first_name + " " + data.last_name }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<style scoped>
.table_list {
  background-color: #fff;
  box-shadow: 0 0 3px 1px #727272;
}

.table_list .table_info {
  font-family: Inter;
  font-size: 1em;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
}

.table_list .table {
  width: 100%;
  border: 1px solid black;
}
</style>
