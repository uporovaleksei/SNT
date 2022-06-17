<template>
  <div>
    <MainLayout>
      <News/>
      <Footer/>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from "@/layouts/Main.vue"
import News from "@/components/NewsItem.vue"

export default {
  components: {
    News,
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