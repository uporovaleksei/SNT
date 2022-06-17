<template>
  <div>
    <MainLayout>
      <div class="FAQ">
        <div class="FAQ__container">
          <div class="FAQ__header">
            <div class="FAQ__title">
              <h1>Вопрос/Ответ</h1>
            </div>
            <div class="FAQ__question">
              <button>Задать вопрос</button>
            </div>
          </div>
          <div class="FAQ__body">

          </div>
        </div>
      </div>
    </MainLayout>
  </div>
</template>

<script>

import MainLayout from '@/layouts/Main.vue'

  export default {
    name: "FAQ",
    components:{
      MainLayout,
    }
    
  }
</script>

<style>
.FAQ {
  margin: 120px 0;
}
.FAQ__container {
  width: 80%;
  margin: 0 auto;
}
.FAQ__header{
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.FAQ__title h1{
  font-size: 2rem;
  color: #476160;
  font-weight: 600;
}
.FAQ__question button{
  padding: 30px;
  font-size: 1.5rem;
  background: #476160;
  color: #fff;
  font-weight: 500;
  border: 0;
  transition: 0.3s ease;
}
.FAQ__question button:hover{
  background: #476160a8;
}
.FAQ__question button:active{
  transform: scale(0.9);
}
.FAQ__body {
}
</style>