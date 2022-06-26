<template>
  <div>
        <div class="reviews">
            <div class="reviews__container">
                <div class="reviews__title">
                    Комментарии
                </div>
                <div class="reviews__body">
                    <div class="reviews__commentary">
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
                                        <a href="#">Ответить
                                            
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="subuser">
                                <div class="user__avatar">
                                </div>
                                <div class="user__data">
                                    <div class="user__name">
                                        Пользователь_2
                                    </div>
                                    <div class="user__comment">
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div class="comment__actions">
                                        <div class="comment__date">
                                            14:30 22.04.2022
                                        </div>
                                        <div class="comment__answer">
                                            <a href="#">Ответить
                                                
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
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
@media (max-width:425.96px) {
    .user__avatar {
        width: 30px;
        height: 30px;
}
}
</style>