<template>
  <div>
    <MainLayout>
        <div class="government__create__container"
          v-if="isAdmin"
        >
        <div class="government__create">
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
                placeholder="ФИО"
                v-model="name"
                >
                <input 
                type="text" 
                placeholder="Должность"
                v-model="status"
                >
            </div>
            <div class="create__image">
              <label for="input">Контактная информация</label>
              <input 
              type="text" 
              placeholder="Email"
              v-model="email"
              >
              <input 
              type="text" 
              placeholder="Телефон"
              v-model="phone"
              >
              <input type="file" 
                  multiple = "false"
                  placeholder="Изображение"
                  @change = "handleFileUpload"
                >
                <div class="preview">
                  <img alt="" :src ="preview">
                </div>
            </div>
            <div class="accept__btn">
                <button @click="createGovernment">Добавить</button>
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
            <div 
            class="government__item"
            v-for="item in items"
            :key="item.id"
            >
              <div class="government__photo">
                <img :src="item.image" alt="">
              </div>
              <div class="government__info">
                <div class="government__name">
                  <label for="h2">
                    ФИО:
                  </label>
                  <h2>{{item.name}}</h2>
                </div>
                <div class="government__status">
                  <label for="h2">
                    Должность:
                  </label>
                  <h2>{{item.status}}</h2>
                </div>
                <div class="government___phone">
                   <label for="h2">
                    Телефон:
                  </label>
                  <h2>{{item.phone}}</h2>
                </div>
                <div class="government__email">
                   <label for="h2">
                    Email:
                  </label>
                  <h2>{{item.email}}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from "@/layouts/Main.vue";
import api from "@/api"
  export default {
    name: "Government",
    components:{
      MainLayout
    },
    data() {
      return {
        show:false,
        name:null,
        status:null,
        phone:null,
        email:null,
        image:null,
        preview: null,
        items:[],
      }
    },
  computed: {
    isAdmin(){
      return this.$store.state.user?.is_admin
    }
  },
  created(){
    this.getGovernment()
  },
    methods: {
      async createGovernment(){
      console.log(this.file)
      await api.post("government", {
        name:this.name,
        status:this.status,
        phone:this.phone,
        email: this.email,
        image: this.preview
      },
      )
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
    async getGovernment(){
      this.items = await api.get('/government')
    },
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
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.government__item {
  display: flex;
  gap: 20px;
}
.government__item h2{
  font-size: 1.2rem;
  color: #476160;
}
.government__photo{
  width: 300px;
  height: 100%;
  background: #476160;
}
.government__photo img{
  width: 300px;
  height: 100%;
  border: #476160 2px solid;
}
.government__photo,.government__name, .government__status, .government___phone, .government__email{
  display: flex;
  align-items: baseline;
  gap: 10px;
}
.government__info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
}
.government__name {
}
.government__status {
}
.government___phone {
}
.government__email {
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