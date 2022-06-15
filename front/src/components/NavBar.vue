<template>
        <div class="navbar"> 
            <div class="navbar__container">
                <div class="navbar__logo">
                    <a href="#" class="logo__link">
                        СНТ "Земляника"
                    </a>
                </div>
                <div class="navbar__menu">
                    <div 
                      :class="['menu__body', {'active': menuIsOpen}]"
                    >
                        <ul class="menu__list">
                            <li class="menu__item" v-for="menuItem in menuItems" :key="menuItem">
                                <a href="#" class="menu__link">{{menuItem}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div 
                  @click="menuIsOpen = !menuIsOpen" 
                  :class="['menu__icon', {'active': menuIsOpen}]"
                >
                    <span></span>
                </div>
                <div class="navbar__actions">
                    <div class="actions__login">
                        <a href="#" class="login__link">Войти</a>
                    </div>
                    <div class="actions__icon">
                        <img src="../assets/user.svg" alt="user">
                    </div>
                </div>
            </div>
            <SubNav/>
        </div>
</template>

<script>
import SubNav from "@/components/SubNav.vue"
export default {
    components: {
    SubNav
  },
        data() {
            return {
                menuItems:["Главная","Новости","Документы","Правление","Контакты","FAQ"],
                menuIsOpen: false
            
            }
        },
        watch: {
          menuIsOpen(){
            document.body.classList.toggle('lock')
          }
        }
    }
</script>
<style>
</style>