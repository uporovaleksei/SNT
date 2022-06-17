<template>
  <div>
    <MainLayout>
      <div class="government">
        <div class="government__container">
          <div class="government__title">
            <h1>Состав правления</h1>
          </div>
          <div class="government__body">
          </div>
        </div>
      </div>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from "@/layouts/Main.vue";

  export default {
    name: "Government",
    components:{
      MainLayout
    }
  }
</script>

<style>
.government {
  margin: 120px 0;
}
.government__container {
  width: 80%;
  margin: 0 auto;
}
.government__title h1{
  font-size: 2rem;
  color: #476160;
  font-weight: 600;
}
.government__body {
}
</style>