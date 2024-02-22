<script setup>
import { onMounted } from "vue";

defineProps({
  userData: Object,
  showData: Boolean,
});

const emits = defineEmits();

function closeDialog() {
  emits("update:showData", false);
}
</script>

<template>
  <main class="main">
    <div v-if="userData" class="dialog rounded-md p-6">
      <div class="inside flex items-center">
        <img :src="userData.profile_picture" alt="" />
        <div>
          <h1>{{ userData.first_name + " " + userData.last_name }}</h1>
          <h2 class="my-4">{{ userData.email }}</h2>
          <h3>{{ userData.phone }}</h3>
        </div>
      </div>
      <div class="inside-2 flex items-center mt-5">
        <div>
          <h1><span>Job:</span> {{ userData.job }}</h1>
          <h1 class=""><span>Gender:</span> {{ userData.gender }}</h1>
          <h1>
            <span>Country:</span>
            {{ userData.country + " - " + userData.state }}
          </h1>
          <h1><span>Street:</span> {{ userData.street }}</h1>
          <h1><span>City:</span> {{ userData.city }}</h1>
        </div>
      </div>
      <button @click="closeDialog" class="close_button">
        <img src="/images/hara_x.svg" alt="Close button" />
      </button>
    </div>
    <div v-if="userData" class="backdrop"></div>
  </main>
</template>

<style scoped>
.main {
  position: relative;
}

.main .close_button {
  position: absolute;
  top: -2%;
  right: -2%;
  padding: 1em;
  border-radius: 50%;
  background-color: #e3f2fd;
  box-shadow: 0 0 3px 1px #727272;
}

.main .inside img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  background-size: cover;
  margin-right: 1em;
}

.main .inside h1 {
  font-family: Inter;
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
  color: black;
}

.main .inside h2 {
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #727272;
}

.main .inside h3 {
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #4cbf93;
}

.main .inside-2 {
  background-color: #e3f2fd;
  padding: 1em;
  border-top-left-radius: 2em;
  border-bottom-right-radius: 2em;
}

.main .inside-2 h1 span {
  font-weight: 600;
  font-family: inter;
  margin-right: 1em;
}

.main .inside-2 h1:not(:last-child) {
  margin-bottom: 1em;
}

.main .dialog {
  background-color: white;
  min-width: 500px;
  min-height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  overflow: hidden;
  box-shadow: 0 0 3px 0px #727272;
}

.main .backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #d9d9d980;
  z-index: 8;
}
</style>
