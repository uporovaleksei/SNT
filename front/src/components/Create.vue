<template>
  <div>
      <div class="create__container">
        <div class="create">
            <button
            @click="show =!show"
            >
            {{ show ? 'Закрыть' : 'Создать' }}</button>
        </div>
        <transition name="slide-fade">
        <div class="create__card" v-if="show">
            <div class="create__title">
                <input 
                type="text"
                >
            </div>
            <div class="create__image">
                <label for="input"></label>
                <input 
                type="file" 
                placeholder="Изображение"
                >
            </div>
            <Tiptap v-model="text"/>
            <div class="accept__btn">
                <button @click="showNews">Подтвердить</button>
            </div>
        </div>
        </transition>
      </div>
  </div>
</template>

<script>
import Tiptap from "@/components/Tiptap.vue"
  export default {
    name: "Create",
    components:{
      Tiptap
    },
    data() {
      return {
        show:false,
        text: null
      }
    },
    methods: {
      showNews(){
        console.log(this.text)
      }
    },
  }
</script>

<style>
.create__container{
  width: 60%;
  margin: 180px auto 0 auto;

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
.create button{
  margin: 20px 0;
  padding: 10px 25px;
  background: #476160;
  color: #fff;
  border-radius: 50px;
  transition: 0.3s ease;
}
.create button:hover{
 background: #47616086;
}
.create button:active{
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
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
}
.create__title {
  width: 100%;
  text-align: center;
}
.create__title input{
  width: 100%;
  padding: 10px;
  outline: none;
  border: 1px solid #476160;
}
.create__title input:focus{
border: 1px solid #60a5a3;
}
.slide-fade-enter-active {
  transition: all 0.8s ease;
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