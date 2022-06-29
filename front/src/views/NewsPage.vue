<template>
  <div>
    <MainLayout>
      <Create v-if="isAdmin"/>
      <News/>
      <Footer/>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from "@/layouts/Main.vue"
import News from "@/components/NewsItems.vue"
import Create from '@/components/Create.vue'


export default {
  components: {
    News,
    MainLayout,
    Create
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    isAdmin(){
      return this.$store.state.user?.is_admin
    }
  }
}
</script>


<style>
</style>