<template>
  <div>
    <MainLayout>
      <div class="header">
        <div class="header__container">
          <div class="header__title">
            <h1>СНТ Земляника</h1>
          </div>
          <div class="header__text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima optio debitis doloribus inventore voluptate
              itaque nam maiores, molestias ratione at nesciunt voluptatem quis fugiat architecto distinctio facilis
              accusantium aspernatur perspiciatis.</p>
          </div>
        </div>
      </div>
      <News/>
      <SliderBar/>
      <Comments/>
      <Location/>
      <Footer/>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from "@/components/layouts/Main"
import News from "@/components/NewsItem.vue"
import SliderBar from "@/components/SliderBar.vue"
import Comments from "@/components/Comments.vue"
import Location from "@/components/Location.vue"
import Footer from "@/components/Footer.vue"
export default {
  components: {
    News,
    SliderBar,
    Comments,
    Location,
    Footer,
    MainLayout
  },
}
</script>


<style>
.header{
    background:linear-gradient(#293636bd,#293636bd), url('../assets/back.jpg') no-repeat;
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
</style>