<template>
  <div class="news__card">
      <div class="news__card__label">
          <div class="news__card__title">
              <h1>{{newstitle}}</h1>
          </div>
          <div class="news__card__date">
              <p>{{date}}</p>
          </div>
      </div>
      <div class="news__card__image">
          <img src="../assets/newsimg.jpg" alt="newsimg">
      </div>
      <div class="news__card__text">
          <p>{{text}}</p>
      </div>
      <div class="news__card__comment">
          <div class="comment__icon">
            <img src="../assets/message.svg" alt="">
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
.comment__icon img{
    width: 15px;
    height: 15px;
    transform: translateY(2px);
}
.comment__icon {
    padding: 5px 10px;
    background: #d3e1e0;
    border-radius: 40%;
}
.comment__count {
    font-size: 1rem;
    color: #476160;
    font-weight: 600;
}
</style>