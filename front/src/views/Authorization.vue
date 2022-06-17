<template>
  <div>
    <AuthLayout>
    <div class="auth">
      <div class="auth__container">
        <div class="auth__body">
          <div class="auth__title">
            <h1>Авторизация</h1>
          </div>
          <div class="reg__login">
            <input 
              type="text"  
              placeholder="Логин"
              v-model="user"
            >
          </div>
          <div class="reg__password">
            <input 
              type="password" 
              placeholder="Пароль"
              v-model="password"
            >
          </div>
          <div class="auth__reg">
             <router-link to="/registration">Зарегистрироваться</router-link>
          </div>
          <div class="auth__submit">
            <button @click="login"> Войти </button>
          </div>
        </div>
      </div>
    </div>
    </AuthLayout>
  </div>
</template>

<script>
import AuthLayout from "@/layouts/Auth.vue";
  export default {
    name: 'Authorization',
    components:{
      AuthLayout
    },
    data() {
      return {
        user: null,
        password: null,
      }
    },
    methods: {
      async login(){
        const data = await this.$store.dispatch("login", {
          login: this.user,
          password: this.password,
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
.auth {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.auth__container {
  display: flex;
  justify-content: center;
  align-content: center;
}
.auth__body {
  background: #d3e1e0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  flex-direction: column;
  border-radius: 12px;
  padding: 60px;
}
.auth__title h1{
  color: #476160;
  font-size: 2rem;
}
.auth__login input, .auth__password input{
  padding: 10px 25px;
  border: 1px solid #476160;
  outline: none;
}
.auth__login input:focus, .auth__password input:focus{
  padding: 10px 25px;
 border: 1px solid #80d1cd;
}
.auth__password {
}
.auth__submit {
  width: 100%;
}
.auth__submit button{
  background: #476160;
  color: #fff;
  font-weight: 500;
  border: 0;
  width: 100%;
  padding: 10px 0;
  transition: 0.3s ease;
}
.auth__submit button:hover{
  background: #476160d7;
}
.auth__submit button:active{
  transform: scale(0.9);
}
</style>