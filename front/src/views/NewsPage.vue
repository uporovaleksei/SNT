<template>
  <div>
    <MainLayout>
      <div class="news__create__container">
        <div class="news__create">
            <button
            @click="show =!show"
            >
            {{ show ? 'Закрыть' : 'Создать' }}</button>
        </div>
        <div class="create__card" v-if="show">
            <div class="create__title">
                <input type="text" placeholder="Заголовок новости">
            </div>
            <div class="create__image">
                <label for="input">Изображение для новости</label>
                <input type="file" placeholder="Изображение">
            </div>
            <div class="create__text">
                <textarea name="" id="" cols="30" rows="10">

                </textarea>
            </div>
            <div class="accept__btn">
                <button>Подтвердить</button>
            </div>
        </div>
      </div>
      <News/>
      <Footer/>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from "@/layouts/Main.vue"
import News from "@/components/NewsItem.vue"

export default {
  components: {
    News,
    MainLayout
  },
  data() {
    return {
      show: true,
    }
  },
}
</script>


<style>
.news__create__container{
  width: 80%;
  margin: 120px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.create__card{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
}
.news__create{
}
.create__image{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>