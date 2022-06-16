<template>
  <div>
        <div class="slider">
            <div class="slider__container">
                <div class="slider__body">
                    <div class="slider__left__arrow"></div>
                    <div class="slider__cards">
                        <div class="slider__card">
                            <div class="slider__card__image"></div>
                            <div class="slider__card__name">
                                Иванов Иван Иванович
                            </div>
                            <div class="slider__card__status">
                                Глава правления
                            </div>
                            <div class="slider__card__button">
                                <button>Подробнее</button>
                            </div>
                        </div>
                    </div>
                    <div class="slider__right__arrow">></div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style>
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

</style>