<template>
  <div>
    <MainLayout>
      <Create
      v-for="item in CreateFields"
      :key="item"
      v-bind:title="item.title"
      v-bind:label="item.label"
      />
      <News/>
      <Footer/>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from "@/layouts/Main.vue"
import News from "@/components/NewsItem.vue"
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
      CreateFields:[
        {
          title:"Заголовок новости",
          label: "Загрузить изображение для новости"
        },
      ]
    }
  },
}
</script>


<style>
</style>