<template>
<div>
<MainLayout>
<div class="documents">
  <div class="documents__container">
    <div class="docuuments__title">
        <h1>Документы</h1>
    </div>
    <div class="documents__body">

    </div>
  </div>
</div>
</MainLayout>
</div>
</template>

<script>
import MainLayout from "@/layouts/Main.vue"

  export default {
      components: {
    MainLayout
  },
  }
</script>

<style>
.documents {
  margin: 120px 0;
}
.documents__container {
  width: 80%;
  margin: 0 auto;
}
.docuuments__title h1{
  font-size: 2rem;
  color: #476160;
  font-weight: 600;
}
.documents__body {
}
</style>