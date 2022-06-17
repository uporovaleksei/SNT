<template>
  <div>
    <MainLayout>
      <div class="contacts">
        <div class="contacts__container">
          <div class="contacts__title">
            <h1>Контакты</h1>
          </div>
          <div class="contacts__body">
              
          </div>
        </div>
      </div>
      <Location/>
    </MainLayout>
  </div>
</template>

<script>
import Location from '@/components/Location.vue'
import MainLayout from '@/layouts/Main.vue'
  export default {
  name:"Contacts",
  components:{ 
    Location,
    MainLayout
    },
    
  }
</script>

<style>
.contacts {
  margin: 120px 0;
}
.contacts__container {
  width: 80%;
  margin: 0 auto;
}
.contacts__title h1{
  font-size: 2rem;
  color: #476160;
  font-weight: 600;
}
.contacts__body {
}
</style>