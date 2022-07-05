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
            v-for="(item,index) in items"
            :key="index"
            :index="index"
            >
            <DeleteBtn
            v-if="isAdmin" 
            :id="item.id" 
            :name="tbname"
            class="DeleteButton"
            />
            <div class="changeButton">
            <button 
            class="changeBtn"
            @click="change(index, item)" 
            v-if="isAdmin">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"/></svg>
            </button> 
          </div>
              <div class="government__photo">

                <img 
                :src="item.image"
                v-if="item.image"
                 alt="">
                <p
                v-if="!item.image"
                >{{item.name.split(' ')[0]}}</p>
                <input 
                type="file"
                v-if="changedId === index"
                @change ="ChangehandleFileUpload"
                >
              </div>
              <div class="government__info">
                <div class="government__name">
                  <label for="h2">
                    ФИО:
                  </label>
                  <h2>{{item.name}}</h2>
                  <input 
                  type="text"
                  v-model="changeName"
                  v-if="changedId === index"
                  >
                </div>
                <div class="government__status">
                  <label for="h2">
                    Должность:
                  </label>
                  <h2>{{item.status}}</h2>
                  <input 
                  type="text"
                  v-model="changeStatus"
                  v-if="changedId === index"
                  >
                </div>
                <div class="government___phone">
                   <label for="h2">
                    Телефон:
                  </label>
                  <h2>{{item.phone}}</h2>
                  <input 
                  type="text"
                  v-model="changePhone"
                  v-if="changedId === index"
                  >
                </div>
                <div class="government__email">
                   <label for="h2">
                    Email:
                  </label>
                  <h2>{{item.email}}</h2>
                  <input 
                  type="text"
                  v-model="changeEmail"
                  v-if="changedId === index"

                  >
                </div>
                        <button 
              @click="updateGovernment(item.id)"
              v-if="changedId === index"
              class="sendBtn"
              >Подтвердить</button>
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
import DeleteBtn from "@/components/DeleteBtn.vue"

import api from "@/api"
  export default {
    name: "Government",
    components:{
      MainLayout,
      DeleteBtn
    },
    data() {
      return {
        show:false,
        tbname:"government",
        name:null,
        status:null,
        phone:null,
        email:null,
        image:null,
        preview: null,
        showChange:false,
        changedId:-1,
        changeImage:null,
        changeName:null,
        changeStatus:null,
        changePhone:null,
        changeEmail:null,
        items:[],
        id:null,
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
      await api.post("government", {
        name:this.name,
        status:this.status,
        phone:this.phone,
        email: this.email,
        image: this.preview
      },
      )
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
    ChangehandleFileUpload(event){
      const files = Array.from(event.target.files)
      files.forEach(file => {
        const reader = new FileReader()
        reader.onload = ev =>{
          const src = ev.target.result
          this.changeImage = src
        }
        reader.readAsDataURL(file)
      })
    },
    async updateGovernment(id){
      await api.put("government/"+ id, {
        id:id,
        image:this.changeImage,
        name:this.changeName,
        status:this.changeStatus,
        phone:this.changePhone,
        email:this.changeEmail,
      },
      )
    this.$router.go(0);
    },
    async getGovernment(){
      this.items = await api.get('/government')
    },
     change(index, item){
      this.changedId = index
      this.changeName = item.name
      this.changeStatus = item.status
      this.changePhone = item.phone
      this.changeEmail = item.email
    },
    async del(id){
    let accept = confirm("Удалить элемент?");
    if(accept){
        await api.delete("government/"+ id)
        console.log(id)
        this.$router.go(0);
    }
    else{
        return
    }
    }
    },
  }
</script>
<style scoped>
.changeButton{
  align-self: flex-start;
}
.DeleteButton{
  align-self: flex-start;
}
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  background: #476160;
}
.government__photo input{
  width: 100%;
  background: #ffffff;
  border: #61a19f 2px solid;
  margin: 0;
}
.government__photo img{
  width: 300px;
  height: 100%;

  border: #476160 2px solid;
}
.government__photo p{
  font-size: 2rem;
  color: #fff;
  font-weight: 500;
}
.government__name, .government__status, .government___phone, .government__email{
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