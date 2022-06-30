<template>
  <div>
    <MainLayout>
    <div class="contacts__create__container" v-if="isAdmin">
        <div class="contacts__create">
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
                placeholder="Заголовок"
                v-model="title"
                >
            </div>
            <div class="create__title">
                        <textarea
                        ref="textarea"
                        rows="1"
                        @focus="resize"
                        @keyup="resize"
                        v-model="text"
                    ></textarea>
            </div>
            <div class="create__image">
                <label for="input">Изображение для контакта</label>
                <input 
                type="file"
                 @change = "handleFileUpload"
                >
                <div class="preview">
                  <img alt="" :src ="preview">
                </div>
            </div>
            <div class="accept__btn">
                <button @click="createContacts()">Подтвердить</button>
            </div>
        </div>
        </transition>
      </div>
      <div class="contacts">
        <div class="contacts__container">
          <div class="contacts__title">
            <h1>Контакты</h1>
          </div>
          <div class="contacts__body">
              <div 
              class="contacts__item"
              v-for="item in contacts"
              :key="item.title"
              >
                <div class="contact__image">
                  <img :src="item.image" alt="">
                </div>
                <div class="contacts__info">
                  <div class="contacts__info__title">
                    <h1>{{item.title}}</h1>
                  </div>
                  <div class="contacts__info__text">
                    <p>{{item.text}}</p>
                  </div>
                </div>
              </div>
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
import api from '@/api'
  export default {
  name:"Contacts",
  components:{ 
    Location,
    MainLayout
    },
  data() {
    return {
      show:false,
      title:null,
      text:null,
      image: null,
      preview: null,
      contacts:[],
    }
  },
  created() {
    this.getContacts()
  },
  computed:{
    isAdmin(){
      return this.$store.state.user?.is_admin
    }
  },
  methods: {
    resize() {
      const { textarea } = this.$refs;
      textarea.style.height = textarea.scrollHeight+ 'px';
    },
   async createContacts(){
      await api.post("/contacts",{
        title:this.title,
        text:this.text,
        image:this.preview,
      })
      window.location.reload()
    },
        handleFileUpload(event){
      const files = Array.from(event.target.files)
      files.forEach(file => {
        const reader = new FileReader()
        reader.onload = ev =>{
          const src = ev.target.result
          console.log(src)
          this.preview = src
        }
        reader.readAsDataURL(file)
      })
    },
    async getContacts(){
      this.contacts = await api.get("/contacts")
    }
  },
  
  }
</script>

<style >
textarea{
    resize: none;
    width: 100%;
    height: 40px;
    padding: 5px;
    outline: none;
    border: #5b9c9a 1px solid;
    border-radius: 6px;
    overflow: hidden;
}
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
display: flex;
flex-direction: column;
gap: 20px;
margin: 40px 0;
}
.contacts__item {
  display: flex;
  gap: 20px;

}
.contact__image {
}
.contacts__info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: flex-start;
}
.contacts__info__title {
}
.contacts__info__text {
}

.contacts__create__container{
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
.contacts__create button{
  margin: 20px 0;
  padding: 10px 25px;
  background: #476160;
  color: #fff;
  border-radius: 50px;
  transition: 0.3s ease;
}
.contacts__create button:hover{
 background: #47616086;
}
.contacts__create button:active{
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