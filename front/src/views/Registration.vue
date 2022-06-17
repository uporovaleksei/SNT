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
            <input type="text"  placeholder="Логин">
          </div>
          <div class="reg__password">
            <input type="password" placeholder="Пароль">
          </div>
          <div class="reg__password">
            <input type="password" placeholder="Повторите пароль">
          </div>
          <div class="reg__reg">
             <router-link to="/authorization">Авторизироваться</router-link>
          </div>
          <div class="reg__submit">
            <button> Зарегистрироваться </button>
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
}
.reg__container {
  display: flex;
  justify-content: center;
  align-content: center;
}
.reg__body {
  background: #d3e1e0;
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