<script setup>
import { ref, watchEffect } from "vue";
import Dialog from "../components/Dialog.vue";
import Status from "../components/Status.vue";

const usersData = ref([]);
const selectedUserData = ref(null);
const show = ref(false);
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

const openDialog = (userData) => {
  selectedUserData.value = userData;
  show.value = true;
};

const closeDialog = (value) => {
  show.value = value;
};

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate.replace(/\//g, " / "); // Add spaces around slashes
};

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
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

// End of Get Data from API

console.log(show.value);
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
    <section class="table_list rounded-md mr-4 mt-7">
      <h1 class="table_info">User List</h1>
      <table class="table mt-6 mb-8">
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
            <td class="index">{{ index + 1 }}</td>
            <td class="name">
              <img :src="data.profile_picture" alt="" />
              {{ data.first_name + " " + data.last_name }}
            </td>
            <td class="date">{{ formatDate(data.date_of_birth) }}</td>
            <td class="email">{{ data.email }}</td>
            <td class="job">{{ data.job }}</td>
            <td class="country">{{ data.country }}</td>
            <td class="action flex">
              <button class="select mr-3 rounded-md">select</button>
              <button @click="openDialog(data)" class="detail rounded-md">
                view detail
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>

  <!-- Start of Dialog -->
  <Transition>
    <Dialog
      :userData="selectedUserData"
      :showData="show"
      v-if="show"
      @update:showData="closeDialog"
    />
  </Transition>

  <!-- End of Dialog -->
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
  margin-left: 1.5em;
  padding-top: 1.5em;
}

.table_list .table {
  width: 100%;

  /* text-align: center; */
}

.table_list .table tr {
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 4px 0px #00000033;
}

.table_list .table tr td,
.table_list .table tr th {
  padding: 1.2em 1.5em;
}

.table_list .table thead tr th {
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #7c7c7c;
}

.table_list .table tbody tr td.index {
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #686868;
}

.table_list .table tbody tr td.name {
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #080808;

  /* Adjust the image */

  display: flex;
  align-items: center;
  /* ----------------- */
}

.table_list .table tbody tr td.name img {
  margin-right: 1em;
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.table_list .table tbody tr td.date {
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #686868;
}

.table_list .table tbody tr td.email {
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #080808;
}

.table_list .table tbody tr td.job {
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #686868;
}

.table_list .table tbody tr td.country {
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #080808;
}

.table_list .table tbody tr td.action {
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
  color: #080808;
}

.table_list .table tbody tr td.action button {
  padding: 0.7em 0.875em;
  background-color: white;
  box-shadow: 0px 0px 4px 0px #00000040;
}

/* Transition style */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
