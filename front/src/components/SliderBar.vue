<template>
  <div>
        <div class="slider"> 
            <div class="slider__container">
                
                <div class="slider__body">
                    <div class="slider__left__arrow"
                    @click="move(-1)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>
                    </div>
                    <transition name="fade" mode="out-in">
                    <template v-for="(slide,index) in Slider">
                        <div class="slider__cards" 
                        v-if="index == active"
                        :key="index">
                            <div class="slider__card">
                                <div class="slider__card__image">
                                </div>
                                <div class="slider__card__name">
                                    {{slide.name}}
                                </div>
                                <div class="slider__card__status">
                                    Глава правления
                                </div>
                                <div class="slider__card__button">
                                    <router-link to="/government">
                                        <button>Подробнее</button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </template>
                    </transition>
                    <div class="slider__right__arrow"
                    @click="move(1)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg>
                    </div>
                </div>
                <ul class="dots" :key="index">
                    <li 
                    v-for="(dot, index) in Slider"
                    :key="index"
                    :class="{ active: index === active }"
                    @click="jump(index)"
                    ></li>
                </ul>
            </div>   
        </div>
  </div>
</template>

<script>
  export default {
    data() {
        return {
            active: 0,
            Slider:[
                {
                    image:null,
                    name:"Иванов Иван Иванович1",
                    status:"Глава правления",
                },
                {
                    image:null,
                    name:"Иванов Иван Иванович2",
                    status:"Глава правления",
                },
                {
                    image:null,
                    name:"Иванов Иван Иванович3",
                    status:"Глава правления",
                },
            ]
        }
    },
    methods: {
        move(amount){
        let newIndex = this.active + amount
        if (newIndex == this.Slider.length) {
            newIndex = 0
        }
        if (newIndex < 0) newIndex = this.Slider.length-1
        this.active = newIndex
        },
        jump(index) {
        this.active = index
    },
    },
  }
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
  z-index: -1;
}
.fade-enter, .fade-leave-to
/* .component-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
   z-index: -1;
}
 .dots {
	 position: unset;
	 display: block;
	 width: 100%;
	 text-align: center;
	 bottom: 20px;
     margin-top: 40px;
}
 .dots li {
	 width: 6px;
	 height: 6px;
	 border-radius: 3px;
	 background: #476160;
	 opacity: 0.2;
	 display: inline-block;
	 margin: 0 3px;
	 cursor: pointer;
	 transition: opacity 0.4s ease-in-out, width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
 .dots li.active {
	 width: 22px;
	 opacity: 1;
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
.slider__right__arrow, .slider__left__arrow  {
    width: 50px;
    height: 50px;
    background-color: #476160;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    transition: 0.3s ease;
}
.slider__right__arrow:hover, .slider__left__arrow:hover{
    background-color: #476160a1;
}
.slider__right__arrow:active, .slider__left__arrow:active{
    transform: scale(0.95);
}
svg{
    width: 25px;
    fill: #fff;
}
.animated {
transition: all 400ms;
position: absolute;
transform: translate(-50%, -50%);
}

.slide-in {
opacity: 0;
transform: translate(-40%, -50%);
}

.slide-in-active {
transition-delay: 150ms;
}

.slide-out {
opacity: 1;
}

.slide-out-active {
opacity: 0;
transform: translate(-60%, -50%);
}
@media (max-width:425.95px) {
.slider__right__arrow, .slider__left__arrow  {
    display: none;
}
.slider__container {
    width: 100%;
}
.slider__card {
width: 90vw;
}
}

</style>