<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route.path);
</script>

<template>
  <main class="main">
    <aside class="aside pl-8 pr-5">
      <h1 class="logo mt-6 mb-5">heylink.</h1>
      <ul>
        <li class="mt-3">
          <router-link
            to="/"
            class="link list-none p-3 text-black rounded-md flex items-center"
            :class="{ active: route.path === '/' }"
            ><img
              src="/images/hara_dashboard.svg"
              alt="icon overview"
              class="mr-3 block"
            />Dashboard</router-link
          >
        </li>
        <li class="mt-3">
          <router-link
            to="/overview"
            class="link list-none p-3 text-black rounded-md flex items-center"
            :class="{ active: route.path === '/overview' }"
          >
            <img
              src="/images/hara_overview.svg"
              alt="icon overview"
              class="mr-3 block"
            />
            <h1>Overview</h1></router-link
          >
        </li>
      </ul>
    </aside>
    <section class="content">
      <div class="head text-black p-3 pl-6">Conversion</div>
      <div class="main">
        <router-view></router-view>
      </div>
    </section>
  </main>
</template>

<style scoped>
.main {
  position: relative;
}

.aside {
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 281px;
}

.aside .logo {
  font-family: Inter;
  font-size: 2em;
  font-weight: 800;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
}

.aside ul li .link {
  background-color: white;
}

.aside ul li .link.active {
  background-color: #e3f2fd;
}

.content {
  margin-left: 281px;
}

.content .head {
  background: white;
  font-family: Inter;
  font-size: 1em;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
}

.content .main {
  margin-left: 37px;
}
</style>
