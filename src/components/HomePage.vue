<script>
import axios from 'axios';
import SideBar from './SideBar.vue';

export default {
  components: {
    SideBar
  },

  data() {
    return {
      baseUrl: 'https://api.slingacademy.com/v1/sample-data/users',
      dataUser: [],
      page: 'HomePage'
    }
  },

  methods: {
    async fetchDataUsers() {
      try {
        const response = await axios({
          url: this.baseUrl,
          method: 'get'
        })
        this.dataUser = response.data.users
      } catch (error) {
        console.log(error)
      }
    }
  },
  created() {
    this.fetchDataUsers()
  },
}

</script>
    
<template>
  <div>
    <SideBar v-if="page === 'HomePage'" :dataUser="dataUser"/>
  </div>
</template>


<style></style>