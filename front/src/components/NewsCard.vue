<template>
  <div class="news__card">
      <div class="news__card__label">
          <div class="news__card__title">
              <h1>{{title}}</h1>
          </div>
          <div class="news__card__date">
              <p>{{new Date(date).toLocaleString('ru')}}</p>
          </div>
      </div>
      <div class="news__card__image">
          <img src="../assets/newsimg.jpg" alt="newsimg">
      </div>
      <div class="news__card__text">
          <p v-html="text"></p>
      </div>
      <div class="news__card__comment">
          <div class="comment__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.1 63.1v287.1c0 35.25-28.75 63.1-64 63.1h-144l-124.9 93.68c-7.875 5.75-19.12 .0497-19.12-9.7v-83.98h-96c-35.25 0-64-28.75-64-63.1V63.1c0-35.25 28.75-63.1 64-63.1h384C483.2 0 511.1 28.75 511.1 63.1z"/></svg>
          </div>
          <div class="comment__count">
              1
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      date: String,
      image: String,
      text: String,
    },
  }
</script>

<style>
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
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
}
.comment__icon svg{
    width: 20px;
    fill: #476160;
    transform: translateY(2px);
}
.comment__icon {
    padding: 5px 10px;
    background: #d3e1e0;
    border-radius: 30%;
}
.comment__count {
    font-size: 1rem;
    color: #476160;
    font-weight: 600;
}
@media (max-width:1024.95px) {
    .news__card{
        width: 90vw;
    }

}
@media (max-width:425.95px) {
    .comment__icon {
    padding: 2px 6px;
    background: #d3e1e0;
    border-radius: 30%;
}
.comment__icon svg{
    width: 12px;
    fill: #476160;
    transform: translateY(2px);
}

}
</style>