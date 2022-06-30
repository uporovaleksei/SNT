<template>
  <div>
    <MainLayout>
      <div class="FAQ">
        <div class="FAQ__container">
          <div class="FAQ__header">
            <div class="FAQ__title">
              <h1>Вопрос/Ответ</h1>
            </div>
          </div>
          <div class="FAQ__body">
              <div class="FAQ__question">
                <h1>Как можно попасть на территорию?</h1>
              </div>
              <div class="FAQ__answer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium suscipit possimus itaque ducimus omnis pariatur corrupti! Vitae inventore, voluptatem in nemo magnam fugit, dicta asperiores fuga nam praesentium voluptatum ad.</p>
              </div>
              <div class="FAQ__question">
                <h1>Какие часы работы?</h1>
              </div>
              <div class="FAQ__answer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium suscipit possimus itaque ducimus omnis pariatur corrupti! Vitae inventore, voluptatem in nemo magnam fugit, dicta asperiores fuga nam praesentium voluptatum ad.</p>
              </div>
              <div class="FAQ__question">
                <h1>Где вы находитесь?</h1>
              </div>
              <div class="FAQ__answer">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium suscipit possimus itaque ducimus omnis pariatur corrupti! Vitae inventore, voluptatem in nemo magnam fugit, dicta asperiores fuga nam praesentium voluptatum ad.</p>
                <img src="../assets/map.jpg" alt="" @click="open">
              </div>
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
    },
    methods: {
      open(){
        var newTab = window.open();
        newTab.location.href = 'http://www.sntzapad.ru/files/image/doc/map-rosreestr.jpg  ';
      }
    },
    
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
.FAQ__body {
  width: 80%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.FAQ__question h1{
  font-size: 1.5rem;
  color: #476160;
}
.FAQ__answer{
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.FAQ__answer img{
  cursor: pointer;
}
.FAQ__answer img{
  border: #476160 solid 2px;
}
</style>