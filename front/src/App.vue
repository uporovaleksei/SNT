<template>
  <div id="app">
    <router-view v-if="ready"></router-view>
  </div>
</template>
<script>
import api from "@/api"

export default {
  components: {
    
  },
  data() {
    return {
      ready: false
    }
  },
  async created(){
    try{
      const data = await api.get("user")
      this.$store.commit("setUser", data)
    }finally{
      this.ready = true
    }
  }
}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

* {
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
}

.lock{
    overflow: hidden;
}
body{
    position: relative;
    z-index: 1;
}
canvas{
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
}

</style>
