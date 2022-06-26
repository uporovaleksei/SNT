<template>
  <div>
    <MainLayout>
        <div class="government__create__container">
        <div class="government__create">
            <button
            @click="show =!show"
            >
            {{ show ? 'Закрыть' : 'Создать' }}</button>
        </div>
        <transition name="slide-fade">
        <div class="create__card" v-if="show">
            <div class="create__title">
                <input type="text" placeholder="Фамилия">
                <input type="text" placeholder="Имя">
                <input type="text" placeholder="Отчество">
            </div>
            <div class="create__image">
              <label for="input">Контактная информация</label>
              <input type="text" placeholder="Email">
              <input type="text" placeholder="Phone">
              <input type="file" placeholder="Изображение">
            </div>
            <Tiptap/>
            <div class="accept__btn">
                <button>Добавить</button>
            </div>
        </div>
        </transition>
      </div>
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
    },
    data() {
      return {
        show:false,
      }
    },
  }
</script>
<style scoped>
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
.government__create__container{
  width: 60%;
  margin: 160px auto 0 auto;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.create__card{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
}
.government__create button{
  margin: 20px 0;
  padding: 10px 25px;
  background: #476160;
  color: #fff;
  border-radius: 50px;
  transition: 0.3s ease;
}
.government__create button:hover{
 background: #47616086;
}
.government__create button:active{
 transform: scale(0.9);
}
.accept__btn button{
  margin: 20px 0;
  padding: 10px 25px;
  background: #476160;
  color: #fff;

  border-radius: 0;
  transition: 0.3s ease;
}
.accept__btn button:hover{
  border-radius: 50px;
  background: #47616086;
}
.accept__btn button:active{
 transform: translateY(-5px);
}
.accept__btn{}
.create__image{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
}
.create__image input{
  width: 50%;
  padding: 10px;
  outline: none;
  border: 1px solid #476160;
}
.create__title {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.create__title input{
  width: 50%;
  padding: 10px;
  outline: none;
  border: 1px solid #476160;
}
.create__title input:focus{
border: 1px solid #60a5a3;
}
.slide-fade-enter-active {
  transition: all 0.3s;
}
.slide-fade-leave-active {
  transition: all .3s;
}
.slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
 opacity: 0;

}
.slide-fade-enter{
  opacity: 0;
}
</style>