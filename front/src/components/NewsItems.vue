<template>
        <div class="news">
            <div class="news__container">
                <div class="news__title">
                    <h1>Новости</h1>
                </div>
                <NewsCard 
                  v-for="item in news" 
                  :key="item.id" 
                  :id="item.id"
                  :title="item.title"
                  :date="item.date"
                  :image="item.image"
                  :text="item.text"
                />
                <div v-if="limit3" class="all__news">
                    <router-link to="news">
                        Все новости
                    </router-link>
                </div>
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
  props: {
    limit3: {
        type: Boolean,
        default: false
    }
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
      this.news = await api.get(this.limit3 ? "news/3" : "news")
    }
  }
}
</script>

<style>
.all__news {
  align-self: center;
}
.all__news a{
  color: #476160;
  font-size: 1.2rem;
  font-weight: 500;
  transition: 0.2s ease;
}
.all__news a:hover{
  color: #47616096;
}
.news{
    margin: 120px 0;
}
.news__container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    gap: 20px;
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


@media (max-width:1024.95px) {
    .news__commentary{
        width: 90vw;
    }

}
@media (max-width:425.95px) {

.news {
    margin: 20px 0;
}
.news__title {
    margin-bottom: 20px;
}
.news__card{
    padding: 10px;
}
.comment__icon {
    padding: 4px 8px;
    background: #d3e1e0;
    border-radius: 30%;
}
.comment__icon svg{
    width: 16px;
    fill: #476160;
    transform: translateY(2px);
}

.user__avatar{
    display: none;
}

}

</style>