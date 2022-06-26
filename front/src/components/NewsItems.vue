<template>
        <div class="news">
            <div class="news__container">
                <div class="news__title">
                    <h1>Новости</h1>
                </div>
                <NewsCard 
                  v-for="item in news" 
                  :key="item.id" 
                  :title="item.title"
                  :date="item.date"
                  :image="item.image"
                  :text="item.text"
                />
                <!-- <div class="news__commentary">
                    <div class="user">
                        <div class="user__avatar">
                        </div>
                        <div class="user__data">
                            <div class="user__name">
                                Пользователь_1
                            </div>
                            <div class="user__comment">
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div class="comment__actions">
                                <div class="comment__date">
                                    14:30 22.04.2022
                                </div>
                                <div class="comment__answer">
                                    <a href="#">Ответить</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
</template>

<script>
import api from "@/api"
import NewsCard from "@/components/NewsCard"

export default {
  name: "NewsItems",
  components:{
      NewsCard,
  },
  data() {
    return {
      news: []
    }
  },
  created(){
    this.getNews()
  },
  methods: {
    async getNews(){
      this.news = await api.get("news")
    }
  }
}
</script>

<style>
.news{
    margin: 120px 0;
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
.news__commentary {
    background: rgb(231, 231, 231);
    width: 60%;
    align-self: center;
    padding: 40px;
    border: 2px solid #4761605b;
    border-top: 0;
}
.news__card__image img {
    width: 100%;
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

@media (max-width:1024.95px) {
    .news__commentary{
        width: 90vw;
    }

}

</style>