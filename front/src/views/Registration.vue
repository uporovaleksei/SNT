<template>
  <div>
    <AuthLayout>
      <div class="reg">
      <div class="reg__container">
        <div class="reg__body">
          <div class="reg__title">
            <h1>Регистрация</h1>
          </div>
          <div class="reg__login">
            <input 
              type="text"  
              placeholder="Логин"
              v-model="login"
            >
          </div>
          <div class="reg__password">
            <input 
              type="password" 
              placeholder="Пароль"
              v-model="password1"
            >
          </div>
          <div class="reg__password">
            <input 
              type="password" 
              placeholder="Повторите пароль"
              v-model="password2"
            >
          </div>
          <div class="reg__password">
            <input 
              type="text" 
              placeholder="name"
              v-model="name"
            >
          </div>
          <div class="reg__password">
            <input 
              type="text" 
              placeholder="Телефон"
              v-model="phone"
            >
          </div>
          <div class="reg__reg">
             <router-link to="/authorization">Авторизироваться</router-link>
          </div>
          <div class="reg__submit">
            <button @click="reg"> Зарегистрироваться </button>
          </div>
        </div>
      </div>
    </div>
    </AuthLayout>
  </div>
</template>

<script>
  import AuthLayout from '@/layouts/Auth.vue'
  export default {
    name:'Registration',
    components:{
      AuthLayout
    },
    data() {
      return {
        login: null,
        password1: null,
        password2: null,
        name: null,
        phone: null
      }
    },
    methods: {
      async reg(){
        if(!this.login){
          alert("Введите логин")
          return
        }
        if(!this.password1 !== !this.password2){
          alert("Пароли не совпадают")
          return
        }
        const minPassword = 1
        if(this.password1?.length < minPassword){
          alert(`Пароль должен содержать минимум ${minPassword} символов`)
          return
        }
        if(!this.name){
          alert("Введите имя")
          return
        }
        if(!this.phone){
          alert("Введите номер")
          return
        }
        const data = await this.$store.dispatch("reg", {
          login: this.login,
          password: this.password1,
          name: this.name,
          phone: this.phone
        })
        if(data?.error){
          alert(data.error)
          return
        }
        this.$router.push({name: 'main'})
      }
    }
  }
</script>

<style>
.reg {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background:linear-gradient(#293636bd,#293636bd), url('../assets/reg_back.jpg') no-repeat;
}
.reg__container {
  display: flex;
  justify-content: center;
  align-content: center;
}
.reg__body {
  background: #d3e1e0d2;
  border: 2px solid #476160;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  flex-direction: column;
  border-radius: 12px;
  padding: 60px 120px;
}
.reg__title h1{
  color: #476160;
  font-size: 2rem;
}
.reg__login input, .reg__password input{
  padding: 10px 25px;
  border: 1px solid #476160;
  outline: none;
}
.reg__login input:focus, .reg__password input:focus{
  padding: 10px 25px;
  border: 1px solid #80d1cd;
}
.reg__password {
}
.reg__submit {
  width: 100%;
}
.reg__submit button{
  background: #476160;
  color: #fff;
  font-weight: 500;
  border: 0;
  width: 100%;
  padding: 10px 0;
  transition: 0.3s ease;
}
.reg__submit button:hover{
  background: #476160d7;
}
.reg__submit button:active{
  transform: scale(0.9);
}
</style>