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
              v-for="(item,index) in contacts"
              :key="index"
              :index="index"
              >
            <div class="changeButton">
            <button 
            class="changeBtn"
            @click="change(index, item)" 
            v-if="isAdmin">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"/></svg>
            </button> 
          </div>
          <div class="delete__contact">
              <DeleteBtn
                v-if="isAdmin" 
                :id="item.id" 
                :name="tbname"  
              />
          </div>
                <div class="contact__image">
                  <img :src="item.image" alt="">
                </div>
                <div class="contacts__info">
                  <div class="contacts__info__title">
                    <h1>{{item.title}}</h1>
                      <input 
                      type="text"
                      v-model="changeTitle"
                      v-if="changedId === index"
                      >
                  </div>
                  <div class="contacts__info__text">
                    <p>{{item.text}}</p>
                      <input 
                      type="text"
                      v-model="changeText"
                      v-if="changedId === index"
                      >
                  </div>
              <button 
              @click="updateContacts(item.id)"
              v-if="changedId === index"
              class="sendBtn"
              >
              Подтвердить</button>
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
import DeleteBtn from '@/components/DeleteBtn.vue'
import api from '@/api'
  export default {
  name:"Contacts",
  components:{ 
    Location,
    MainLayout,
    DeleteBtn
    },
  data() {
    return {
      show:false,
      tbname:"contacts",
      title:null,
      changeTitle: null,
      changeText: null,
      changedId: -1,
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
      this.$router.go(0);
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
    },
    change(index, item){
      this.changedId = index
      this.changeTitle = item.title
      this.changeText = item.text
    },
    async updateContacts(id){
      await api.put("contacts/"+ id, {
        id:id,
        title:this.changeTitle,
        text:this.changeText,
      },
      )
    this.$router.go(0);
    },
  },
  
  }
</script>

<style >
.delete__btn{}
input{
  width: 100%;
  padding: 10px;
  outline: none;
  border: 1px solid #476160;
}
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
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.contact__image img{
  width: 100%;
  order: 3;
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