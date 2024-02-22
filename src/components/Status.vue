<script setup></script>

<template>
  <div class="status">
    <div class="flex items-center justify-between">
      <h1 class="status__info">Pending</h1>
      <img
        src="/images/hara_status.svg"
        alt="icon overview"
        class="mr-3 block"
      />
    </div>
    <h1 class="status__price">2.480,30</h1>
    <div class="flex items-center justify-between mt-7">
      <div class="flex items-center">
        <img
          src="/images/hara_status_up.svg"
          alt="icon overview"
          class="mr-3 block"
        />
        <p class="status__percent">2,15%</p>
        <h2 class="status__monthly ml-4">Last Month</h2>
      </div>
      <div>
        <h1 class="status__view_more">View More</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.status {
  background: white;
  padding: 1.5em;
  border-radius: 10px;
  width: 100%;
}

.status .status__info {
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #727272;
}

.status .status__price {
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}

.status .status__percent {
  font-family: Inter;
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
  color: #4cbf93;
}

.status .status__monthly {
  font-family: Inter;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
  color: #aaaaaa;
}

.status .status__view_more {
  font-family: Inter;
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
  color: #6e6e6e;
}
</style>
