<template>
        <div class="navbar"> 
            <div class="navbar__container">
                <div class="navbar__logo">
                    <a href="#" class="logo__link">
                        СНТ "Земляника"
                    </a>
                </div>
                <div class="navbar__menu">
                    <div class="menu__body">
                        <ul class="menu__list">
                            <li class="menu__item" v-for="menuItem in menuItems" :key="menuItem">
                                <a href="#" class="menu__link">{{menuItem}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="menu__icon" id="menu__icon">
                    <span></span>
                </div>
                <div class="navbar__actions">
                    <div class="actions__login">
                        <a href="#" class="login__link" id="link__login">Войти</a>
                    </div>
                    <div class="actions__icon">
                        <img src="../assets/user.svg" alt="user" id="user__icon">
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
                menuItems:["Главная","Новости","Документы","Правление","Контакты","FAQ",]
            }
        },
        
    }
</script>
<style>
</style>