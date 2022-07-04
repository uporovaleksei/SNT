<template>
        <div class="reviews">
            <div class="reviews__container">
                <div class="reviews__title">
                    Комментарии
                </div>
                <div class="reviews__body">
                <div class="review__field">
                <div v-if="user" class="review__act">
                    <textarea
                        ref="textarea"
                        rows="1"
                        @focus="resize"
                        @keyup="resize"
                        v-model="text"
                    ></textarea>
                    <button @click="send">Отправить</button>
                </div>
                </div>
                    <div
                        v-for="item in paginatedData"
                        :key="item.id"
                        class="reviews__commentary"
                    >
                        <div class="user">
                            <div class="user__avatar">
                                {{item.username.charAt(0).toUpperCase()}}
                            </div>
                            <div class="user__data">
                                <div class="user__name">
                                    {{item.username}}
                                </div>
                                <div class="user__comment">
                                    <p>{{item.text}}</p>
                                </div>
                                <div class="comment__actions">
                                    <div class="comment__date">
                                        {{formatDate(item.date)}}
                                    </div>
                                    <div class="comment__answer">
                                        <a @click="text = item.username+', '">Ответить</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                   
                    </div>
                    <div class="page__btn">
                    <button 
                    @click="prevPage"
                    :disabled="pageNumber==0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></svg>
                    </button>
                    <ul class="dots">
                    <li 
                    v-for="(dot, index) in pageCount"
                    :key="index"
                    :class="{ active: index === active  }"
                    @click="jump(index)"
                    ></li>
                    </ul>
                    <button
                     @click="nextPage"
                    :disabled="pageNumber >= pageCount-1"
                    >
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                    </button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import api from "@/api"

export default {
    name: "Comments",
    props: {
        id: {
            type: Number,
            default: 0
        },
        size:{
        type:Number,
        required:false,
        default: 5
        }
    },
    data() {
        return {
            text: null,
            items: [],
            active: 0,
            pageNumber: 0
        }
    },
    created(){
        this.getComments()
    },
    mounted() {
        this.resize();
    },
    computed: {
        user(){
            return this.$store.state.user
        },
        pageCount(){
        let l = this.items.length,
        s = this.size;
        return Math.ceil(l/s);
        },
        paginatedData(){
        const start = this.pageNumber * this.size,
        end = start + this.size;
        return this.items.slice(start, end);
    }
    },
    methods: {
        jump(index) {
        this.active = index
        this.pageNumber = index
    },
        nextPage(){
         this.pageNumber++;
         this.active++
      },
      prevPage(){
        this.pageNumber--;
        this.active--
      },
        async send(){
            if(!this.text){
                alert("Введите текст")
            }
            else{
            await api.post("comments/"+this.id, {text: this.text})
            this.text = null
            this.getComments()
            }
        },
        async getComments(){
            this.items = await api.get("comments/"+this.id)
            this.$emit("count", this.items.length)
        },
        formatDate(value){
            if (value) {
            value =  parseInt(value, 10)
            var format = new Date(value)
            return format.toLocaleDateString('ru')
            }
        },
       resize() {
        const { textarea } = this.$refs;
        textarea.style.height = textarea.scrollHeight - 4+ 'px';
        },
    }

}
</script>

<style scoped>
.dots{
    margin: 0;
    width:15%;
}
.page__btn{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    transition: 0.3s;

}
.page__btn button{
    border-radius: 50%;
    width: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30px;
}
.page__btn button:disabled{
    opacity: 0.2;
}
.page__btn button:active{
    transform: scale(0.95);
}
.page__btn svg{
    width: 10px;
}
.reviews {
    width: 100%;
    margin: 20px 0;
}
.reviews__container {
    width: 100%;
    margin: 0 auto;
}
.reviews__title {
    font-size: 2rem;
    font-weight: 600;
    color: #476160;
    margin: 25px 0;
}
.review__field textarea{
    resize: none;
    width: 45%;
    height: 40px;
    padding: 5px;
    outline: none;
    border: #5b9c9a 1px solid;
    border-radius: 6px;
    overflow: hidden;
}

.review__field{
    display: flex;
    width: 100%;
    height: 100%;
    margin: 20px 0;
}
.review__act{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
}
.review__act button{
    padding: 8px 30px;
    border-radius: 100px;
    font-size: 1.2rem;
}
.review__act button:active{
    transform: scale(0.9);
}
.reviews__commentary {
    border-bottom: #476160 1px solid;
    padding: 10px 0;
}
.user {
}
.user {
    display: flex;
    gap: 20px   ;
}
.user__avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 65px;
    background: #476160;
    border-radius: 100%;
    font-size: 2.5rem;
    color: #fff;

}
.user__data {
display: flex;
flex-direction: column;
width: 90%;
gap: 10px;
}
.user__name {
    font-size: 1.1rem;
    color: #476160;
    font-weight: 600;
}
.user__comment p{
    flex-wrap: wrap;
}
.comment__actions {
display: flex;
gap: 40px;
}
.comment__date {
    color: rgb(94, 94, 94);
    cursor: default;
}
.comment__answer a{
    color: #476160;
    transition: 0.3s ease;
    cursor: pointer;
}
.comment__answer a:hover{
    color: #476160a8;
}

@media (max-width:425.96px) {
    .user__avatar {
        width: 30px;
        height: 30px;
        font-size: 1rem;
}
}
</style>