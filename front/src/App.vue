<template>
  <div id="app">
    <NavBar/>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  },
}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

* {
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
}

.lock{
    overflow: hidden;
}
body{
    position: relative;
    z-index: 1;
}
canvas{
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
}

.wrapper {}

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

#svg {
    fill: #d3e1e0;
}

#user__icon {
    transition: 0.2s ease 0s;
}
.subnav {
    position: fixed;
    width: 100%;
    height: 30px;
    margin-top: 60px;
    background: #d3e1e0;
    z-index: 3;
}
.subnav__container {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 40px;
    font-weight: 600;
    color: #476160;
}
.subnav__geo {
}
.geo__icon {
}
.geo__label {
}
.subnav__phone {
}
.phone__icon {
}
.phone__label {
}
.header{
    /* background:linear-gradient(#293636bd,#293636bd), url('../assets/back.jpg') no-repeat; */
    background-size: 100% 100%;
    width: 100%;
    height: 70vh;
}

.header__container {
    display: flex;
    height: 100%;
    width: 60%;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
}
.header__title h1{
    text-align: center;
    font-size: 2rem;
}
.header__text p{
    text-align: center;
    font-size: 1.5rem;
}
.news{
    margin: 80px 0;
}
.news__container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}
.news__title{
    margin-bottom: 40px;
}
.news__title h1{
    color: #476160;
    font-size: 2rem;
}
.news__card {
    align-self: center;
    width: 60%;
    border: 2px solid #4761605b;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    border-radius: 10px 10px 0 0;
}
.news__card__label {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.news__card__title h1{
    color: #111111;
    font-size: 1.5rem;
}
.news__card__date {
    align-self: flex-end;
}
.news__card__image{
    align-self: center;
    text-align: center;
}
.news__card__image img{
    width: 60%;
}
.news__card__text {
    margin: 20px 0;
}
.news__card__comment {
    align-self: flex-start;
}
.comment__icon {
}
.comment__count {
}
.news__commentary {
    background: rgb(231, 231, 231);
    width: 60%;
    align-self: center;
    padding: 40px;
    border: 2px solid #4761605b;
    border-top: 0;
}
.user {
    display: flex;
    gap: 20px   ;
}
.user__avatar {
    width: 70px;
    height: 70px;
    background: #476160;
    border-radius: 100%;
}
.user__data {
display: flex;
flex-direction: column;
gap: 10px;
}
.user__name {
    font-size: 1.1rem;
    color: #476160;
    font-weight: 600;
}
.user__comment {
}
.comment__actions {
display: flex;
gap: 40px;
}
.comment__date {
    color: rgb(94, 94, 94);
}
.comment__answer a{
    color: #476160;
    transition: 0.3s ease;
}
.comment__answer a:hover{
    color: #476160a8;
}

.slider {
    margin: 80px 0;
}
.slider__container {
    width: 80%;
    margin: 0 auto;
}
.slider__body {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
}
.slider__left__arrow {
    width: 50px;
    height: 50px;
    background-color: #476160;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}
.slider__cards {
    display: flex;
    gap: 40px;
}
.slider__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 1px #293636bd;
    padding: 40px;
    transition: 0.3s ease;
}
.slider__card:hover {
    transform: scale(1.1);
    box-shadow: 0px 5px 10px 3px rgba(87, 171, 167, 0.25);
}
.slider__card__image {
    width: 100%;
    height: 300px;
    background: #476160;
}
.slider__card__name {
    text-align: center;
    font-size: 1.2rem;
    color: #111111;
    font-weight: 600;
    margin-top: 20px;
}
.slider__card__status {
    margin-top: 20px;
    font-size: 1.2rem;
}
.slider__card__button {
    margin-top: 20px;
}
.slider__card__button button{
    padding: 10px;
    border: 0;
    background: #476160;
    color: #fff;
    border-radius: 6px;
    transition: 0.3s ease;
}
.slider__card__button button:hover{
    transform: scale(0.95);
    background: #4761607e;
}
.slider__right__arrow {
    width: 50px;
    height: 50px;
    background-color: #476160;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}

.reviews {
    margin: 80px 0;
}
.reviews__container {
    width: 80%;
    margin: 0 auto;
}
.reviews__title {
    font-size: 2rem;
    font-weight: 600;
    color: #476160;
    margin: 40px 0;
}
.reviews__body {
}
.reviews__commentary {
}
.user {
}
.user__avatar {
}
.user__data {
}
.user__name {
}
.user__comment {
}
.comment__actions {
}
.comment__date {
}
.comment__answer {
}
.subuser {
    margin: 20px 40px;
    display: flex;
    gap: 20px;
    border-bottom: 1px solid rgba(107, 107, 107, 0.342);
    padding-bottom: 20px;
}
.location {
    margin-top: 80px;
}
.location__container {
    width: 80%;
    margin: 0 auto;
}
.location__title {
    font-size: 2rem;
    color: #476160;
    font-weight: 600;
    margin: 40px 0;
}
.footer{
    margin-top: 80px;
}
.footer__container {
    width: 100%;
    background: #476160;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer__title {
    color: #d3e1e0;
    font-size: 1.5rem;
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
