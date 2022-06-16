<template>
        <div class="news">
            <div class="news__container">
                <div class="news__title">
                    <h1>Новости</h1>
                </div>
                <div class="news__card">
                    <div class="news__card__label">
                        <div class="news__card__title">
                            <h1>Заголовок новости</h1>
                        </div>
                        <div class="news__card__date">
                            <p>24.02.2022</p>
                        </div>
                    </div>
                    <div class="news__card__image">
                        <img src="../assets/newsimg.jpg" alt="newsimg">
                    </div>
                    <div class="news__card__text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur modi harum dolorum nam, praesentium amet id hic ipsam accusantium at omnis ipsa, quis voluptatum est. Pariatur repudiandae est natus modi.
                        Omnis dicta animi iste commodi aliquam magni sunt doloribus voluptatibus ad perferendis cum autem soluta error dolor, a fugit recusandae optio suscipit maiores vitae harum delectus id eaque. Minus, recusandae.
                        Impedit eos ipsum dolorem distinctio iusto est! Consectetur recusandae maiores nam ex quo perspiciatis vitae, consequuntur exercitationem. Molestiae iure voluptatibus, exercitationem quam recusandae asperiores blanditiis officia dolores pariatur eius nostrum!
                        Sed quae esse ratione perferendis dignissimos dolore deserunt, dolor itaque eum accusantium tenetur reiciendis temporibus rerum blanditiis impedit laborum asperiores dolorem dolorum nihil nulla assumenda, optio quos earum? Rerum, error!
                        Sint nesciunt dolore dolorem? Placeat odit animi debitis consequatur minus maxime sequi aliquam omnis quia voluptates? Itaque obcaecati reprehenderit quod exercitationem magni placeat velit eius qui laboriosam! Animi, reprehenderit delectus.
                        Veritatis modi velit sed nemo illo nostrum impedit facilis, in et, quasi tempora animi earum natus, magni adipisci mollitia fuga totam eaque qui reiciendis nam? Laborum aut reiciendis sit atque.
                        Laudantium voluptates perferendis odio suscipit praesentium corrupti numquam modi obcaecati molestiae nulla harum commodi sequi atque fugiat itaque quam nihil, minus non vel similique cumque distinctio quidem vitae consequatur! Accusamus.
                        Quis accusantium corporis itaque tempora illum odio magni nulla. Totam tempora accusantium aperiam exercitationem maiores minus facere! Animi quas sequi necessitatibus molestias quisquam unde cum aliquam consequuntur. Quae, quisquam numquam.
                        Quae vero earum eveniet modi placeat quos magni possimus. Voluptate sed quod explicabo ea iusto asperiores praesentium amet odit aliquid ullam tempore, incidunt enim, nihil inventore fugit expedita molestiae illo!
                        Quaerat quisquam perferendis aliquam nihil nostrum nulla rerum maxime minima autem, dolore assumenda eligendi et provident modi impedit. Itaque excepturi adipisci sint recusandae libero, necessitatibus nulla reiciendis inventore provident voluptate?</p>
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
                <div class="news__commentary">
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
                </div>
            </div>
        </div>
</template>

<script>
  export default {
    
  }
</script>

<style>
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

</style>