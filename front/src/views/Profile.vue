<template>
<MainLayout>
  <div class="profile">
    <div class="profile__title">
      <h1>Личный кабинет</h1>
    </div>
    <div class="profile__container">
      <button @click="showChange =! showChange">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"/></svg>
      </button>
      <div class="user__name">
        <label>Имя:</label>
        {{username}}
        <input 
        type="text" 
        v-model="changedName"
        v-if="showChange">
      </div>
      <div class="user__login">
        <label>Логин:</label>
        {{userlogin}}
        <input 
        type="text" 
        v-if="showChange"
        v-model="changedLogin"
        >
      </div>
      <div class="user__phone">
        <label>Телефон:</label>
        {{userphone}}
        <input 
        type="text"
        v-if="showChange"
        v-model="changedPhone"
        :placeholder="userphone"
        >
      </div>
    </div>
    <button @click="updateProfile">Изменить</button>
  </div>
</MainLayout>
</template>


<script>
import MainLayout from '@/layouts/Main.vue'
import api from '@/api'
  export default {
    components:{
      MainLayout
    },
    data() {
      return {
        showChange:false,
        changedPhone:null,
        changedName:null,
        changedLogin:null,
        id:null,
      }
    },
    computed:{
      userid(){
        return this.$store.state.user?.id
      },
      username(){
        return this.$store.state.user?.name
      },
      userlogin(){
        return this.$store.state.user?.login
      },
      userphone(){
        return this.$store.state.user?.phone
      },
    },
    methods: {
      async updateProfile(){
      console.log(this.file)
      await api.put("/profile", {
        id:this.userid,
        phone:this.changedPhone,
        name:this.changedName,
        login:this.changedLogin,
      },
      )
    this.$router.go(0);
    },
    },
  }
</script>

<style>
.profile {
  margin: 120px auto;
  width: 80%;
}
.profile__title h1{
  font-size: 2rem;
  color: #476160;
}
.profile__container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 40px 0;
}
.profile__container svg{
  width: 25px;
  fill: #ffffff;
}
.profile__container button{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.profile__container button:active{
  transform: scale(0.9);
}
.user__name {
}
.user__login {
}
.user__phone {
}
</style>