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
                <div style="width: 100%">
                  <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3,%20%D0%A1%D0%B2%D0%B5%D1%80%D0%B4%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB.,%20620036+(%D0%A0%D0%B0%D1%81%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed&amp;language=ru "><a href="https://www.gps.ie/wearable-gps/">Гугл карты</a></iframe>
                </div>
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