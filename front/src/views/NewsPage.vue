<template>
  <div>
    <NavBar/>
    <SubNav/>
    <News/>
    <Footer/>
  </div>
</template>

<script>
  import News from "@/components/NewsItem.vue"
  import Footer from "@/components/Footer.vue"
  export default {
    components: {
      News,
      Footer,
    },
    data() {
      return {
        
      }
    },
  }
</script>


<style>
</style>