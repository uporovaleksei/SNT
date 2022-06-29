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
                        v-for="item in items"
                        :key="item.id"
                        class="reviews__commentary"
                    >
                        <div class="user">
                            <div class="user__avatar">
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
        }
    },
    data() {
        return {
            text: null,
            items: []
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
        }
    },
    methods: {
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
    width: 70px;
    height: 65px;
    background: #476160;
    border-radius: 100%;
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
}
}
</style>