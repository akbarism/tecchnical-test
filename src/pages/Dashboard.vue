<script setup>
import Card from "../components/Card/index.vue";
import Table from "../components/Table/index.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import { CardContent } from "../components/Card/card.constant";
import ModalComponent from "../components/Modal/Modal.vue";

const card = ref(CardContent);

const users = ref([]);

const fetchDataUser = async () => {
  try {
    const response = await axios.get(
      "https://api.slingacademy.com/v1/sample-data/users"
    );
    users.value = response.data.users;
    console.log(users.value);
  } catch (err) {
    console.error(err);
  }

  return users.value;
};

onMounted(() => {
  fetchDataUser();
});

const selectedUser = ref(null);

const showUserDetails = (user) => {
  selectedUser.value = user;
  openModal();
};

const isModalOpened = ref(false);

const openModal = () => {
  isModalOpened.value = true;
};
const closeModal = () => {
  isModalOpened.value = false;
};
</script>

<template>
  <!-- menampilkan modal -->
  <div class="lg:grid lg:grid-cols-3 lg:gap-[23px] grid grid-cols-1 gap-2">
    <!-- card pending, paid, rejected -->
    <div v-for="items in card" :key="items.title">
      <Card
        :title="items.title"
        :price="items.price"
        :priceLast="items.priceLast"
        :icon="items.icon"
        :iconUp="items.iconUp"
        :percent="items.percent"
      />
    </div>
  </div>
  <div class="lg:mt-[31px] mt-9 border rounded-t-md shadow-sm mb-96">
    <h1
      class="pt-[25px] pl-7 pb-[18px] font-semibold text-[17px] leading-[20.57px] text-[#080808]"
    >
      User List
    </h1>
    <Table :users="users" @show-details="showUserDetails" />
  </div>

  <!-- transisi modal -->
  <Transition name="fade">
    <!-- component modal -->
    <ModalComponent
      :isOpen="isModalOpened"
      @modal-close="closeModal"
      @submit="submitHandler"
      name="first-modal"
    >
      <!-- modal header -->
      <template #header>
        <div v-if="selectedUser" class="flex flex-col p-5">
          <button @click="closeModal" class="place-self-end">
            <svg
              @click="isOpen = false"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-red-900 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div class="flex flex-col md:flex-row items-center">
            <div class="pl-9 pr-[31px] pt-[26px]">
              <img
                :src="selectedUser.profile_picture"
                alt=""
                width="150"
                height="150"
              />
            </div>
            <div class="pt-[61px]">
              <h2
                class="font-medium lg:text-[40px] text-xl lg:leading-[48.41px] leading-9 text-[#080808]"
              >
                {{ selectedUser.first_name }} {{ selectedUser.last_name }}
              </h2>
              <p class="font-medium text-xl leading-[24.2px] text-[#080808]">
                {{ selectedUser.email }}
              </p>
              <p class="font-medium text-xl leading-[24.2px] text-[#080808]">
                {{ selectedUser.phone }}
              </p>
            </div>
          </div>
          <!-- Button close modal -->
        </div>
      </template>
      <template #content>
        <div class="lg:flex lgflex-col flex p-4 md:p-16">
          <!-- kiri Content -->
          <div
            class="md:w-1/2 font-medium text-xl leading-[24.2px] text-[#080808]"
          >
            <p>
              <span class="text-lg font-extrabold">Job</span> :
              {{ selectedUser.job }}
            </p>
            <p>
              <span class="text-lg font-extrabold">Gender</span> :
              {{ selectedUser.gender }}
            </p>
          </div>

          <!-- kanan Content -->
          <div
            class="md:w-1/2 pl-4 font-medium text-xl leading-[24.2px] text-[#080808]"
          >
            <p>
              <span class="text-lg font-extrabold">State</span> :
              {{ selectedUser.state }}
            </p>
            <p>
              <span class="text-lg font-extrabold">City</span> :
              {{ selectedUser.city }}
            </p>
          </div>
        </div>
      </template>
    </ModalComponent>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
