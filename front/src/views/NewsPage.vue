<template>
  <div>
    <MainLayout>
      <News/>
      <Footer/>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from "@/components/layouts/Main"
import News from "@/components/NewsItem"
import Footer from "@/components/Footer"

export default {
  components: {
    News,
    Footer,
    MainLayout
  },
  data() {
    return {
      
    }
  },
}
</script>


<style>
</style>