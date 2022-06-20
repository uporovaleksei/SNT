<template>
        <div class="navbar"> 
            <div class="navbar__container">
                <div class="navbar__logo">
                        <router-link class="logo__link" to="/">СНТ "Земляника"</router-link>
                </div>
                <div class="navbar__menu">
                    <div 
                      :class="['menu__body', {'active': menuIsOpen}]"
                    >
                        <ul class="menu__list">
                            <li 
                            class="menu__item" 
                            v-for="menuItem in menuItems" 
                            :key="menuItem.route">
                                <router-link 
                                class="menu__link" 
                                :to="menuItem.route"
                                >{{menuItem.name}}
                                </router-link>
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
                        <span class="actions__username" 
                        v-if="username"
                        >
                        {{username}}
                        </span>
                        <router-link 
                            v-else
                            class="login__link" 
                            to="/authorization"
                        >
                            Войти
                        </router-link>
                    </div>
                    <div class="actions__icon">
                        <img src="../assets/user.svg" alt="user">
                    </div>
                                            <span 
                            @click="logout"
                            v-if="username"
                            class="actions__exit" 
                        >
                            Выйти
                        </span>
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
                menuItems:[
                    {
                        name:"Главная",
                        route: "/"
                    },
                     {
                        name:"Новости",
                        route: "/news"
                    },
                     {
                        name:"Документы",
                        route: "/documents"
                    },
                     {
                        name:"FAQ",
                        route: "/FAQ"
                    },
                     {
                        name:"Правление",
                        route: "/government"
                    },
                     {
                        name:"Контакты",
                        route: "/сontacts"
                    },
                    ],
                menuIsOpen: false
            
            }
        },
        computed: {
            username(){
                return this.$store.state.user?.name
            }
        },
        methods: {
            logout(){
                this.$store.dispatch("logout")
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
.navbar a {
    color: #fff;
}

.navbar {
    background: #476160;
    position: fixed;
    width: 100%;
}

.navbar__container {
    background: #476160;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 80%;
    margin: 0 auto;
    z-index: 6;
}

.navbar__logo {
    flex: 1 1 33%;
    z-index: 6;
}

.logo__link {
    font-weight: 700;
    font-size: 1.5rem;
    transition: 0.2s ease 0s;
}

.logo__link:hover {
    color: #d3e1e0;
}

.navbar__menu {
    flex: 0 1 100%;
    display: flex;
    justify-content: flex-end;
}

.menu__icon {
    display: none;
}

.menu__body {}

.menu__list {
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    gap: 35px;
}

.menu__item {}

.menu__item:hover {
    transform: translateY(-2px);
}

.menu__item {
    transition: 0.2s ease;
}

.menu__link {
    font-weight: 500;
    font-size: 1.2rem;
    transition: 0.2s ease 0s;
}

.menu__link:hover {
    color: #d3e1e0;
}

#menu__login{
    display: none;
}

.navbar__actions {
    display: flex;
    align-items: center;
    gap: 20px;
    flex: 1 1 33%;
    justify-content: flex-end;
    margin-left: 20px;
}

.actions__login {
    transition: 0.2s ease;
}

.actions__login:hover {
    transform: translateY(-2px);
}

.login__link {
    font-weight: 500;
    font-size: 1.2rem;
    transition: 0.2s ease 0s;
}

.login__link:hover {
    color: #d3e1e0;
}

.actions__icon {
    width: 20px;
    transition: 0.3s;
}

.actions__username{
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
}
.actions__username:hover{
    color: #d3e1e0;
}
.actions__exit{
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    transition: 0.3s ease;
    cursor: pointer;
}
.actions__exit:hover{
    color: #d3e1e0;
    transform: scale(0.9);
}

#user__icon {
    transition: 0.2s ease 0s;
}
@media (max-width: 767px) {
    .menu__icon {
        cursor: pointer;
        height: 18px;
        width: 30px;
        position: relative;
        display: block;
        z-index: 5;
    }

    .menu__icon span,
    .menu__icon:before,
    .menu__icon:after {
        left: 0;
        position: absolute;
        height: 10%;
        width: 100%;
        transition: 0.3s ease;
        background: #d3e1e0;
    }

    .menu__icon:before,
    .menu__icon:after {
        content: "";
    }

    .menu__icon:after {
        bottom: 0;
    }

    .menu__icon:before {
        top: 0;
    }

    .menu__icon span {
        top: 45%;
        transform: translate(0px -50%);
    }
    .menu__body{
        top: 0;
        left: -100%;
        height: 100%;
        width: 100%;
        background: #d3e1e0;
        z-index: 5;
        margin-top: 80px;
        position: fixed;
        transition: 0.3s ease;
        overflow: auto;
        
    }
    .menu__body.active {
      left: 0;
    }
    .menu__icon.active span{
        transform: scale(0);
    }
    .menu__icon.active::before{
        top:50%;
        transform: rotate(-45deg) translate(0px, -50%);
    }
    .menu__icon.active::after{
        bottom: 50%;
        transform: rotate(45deg) translate(0px, 50%);
    }
    .menu__list{
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
        align-items: flex-start;
        padding: 25px;       
    }
    .menu__item a{
        color: #476160;
    }
    .menu__item a:hover{
        color: #476160bd;
    }
    .navbar__actions{
        display: none;
    }
    .navbar__container{
        position: fixed;
        width: 100%;
        padding: 0 20px;
    }
    .navbar__menu{
        position: absolute;
    }
    #menu__login{
        display: block;
    }
}


</style>