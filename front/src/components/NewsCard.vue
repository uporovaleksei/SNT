<template>
  <div class="news__card">
    <button class="changeBtn" @click="change" v-if="isAdmin">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"/></svg>
    </button>
    <DeleteBtn
        v-if="isAdmin" 
        :id="id" 
        :name="tbname"
    />
      <div class="news__card__label">
          <div class="news__card__title">
              <h1>{{title}}</h1>
              <input type="text"
              v-if="showChange"
              v-model="changeTitle"
              >
          </div>
          <div class="news__card__date">
              <p>{{formatDate(date)}}</p>
              <input type="date"
              v-model="changeDate"
              v-if="showChange"
              >
          </div>
      </div>
      <div class="news__card__image">
       <img  alt="" :src="image"> 
       <input 
       type="file"
       v-if="showChange"
       @change="handleFileUpload"
       >
      </div>
      <div class="news__card__text">
          <div v-html="text">

          </div>
            <textarea
                ref="textarea"
                rows="1"
                @focus="resize"
                @keyup="resize"
                v-model="changeText"
                v-if="showChange"
            ></textarea>
      </div>
        <button 
              @click="updateNews"
              v-if="showChange"
              class="sendBtn"
              >Подтвердить</button>
      <div class="news__card__comment">
        
          <div class="comment__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.1 63.1v287.1c0 35.25-28.75 63.1-64 63.1h-144l-124.9 93.68c-7.875 5.75-19.12 .0497-19.12-9.7v-83.98h-96c-35.25 0-64-28.75-64-63.1V63.1c0-35.25 28.75-63.1 64-63.1h384C483.2 0 511.1 28.75 511.1 63.1z"/></svg>
          </div>
          <div v-if="commentsCount !== null" class="comment__count">
              {{commentsCount}}
          </div>
      </div>
      <Comments :id="id" @count="v => commentsCount = v"/>
  </div>
</template>

<script>
import Comments from "./Comments.vue"
import DeleteBtn from "./DeleteBtn.vue"
import api from '@/api'

export default {
    components: {
        Comments,
        DeleteBtn
    },
    props: {
        id: Number,
        title: String,
        date: String,
        image: String,
        text: String,
    },
    data() {
        return {
            commentsCount: null,
            tbname:'news',
            showChange:false,
            changeTitle:null,
            changeDate:null,
            changeImage:null,
            changeText:null,
        }
    },
    computed: {
    isAdmin(){
      return this.$store.state.user?.is_admin
    }
    },
    methods: {
        formatDate(value){
            if (value) {
            value =  parseInt(value, 10)
            var format = new Date(value)
            return format.toLocaleDateString('ru-RU')
            }
        },

    async updateNews(){
        let date = new Date(this.changeDate);
        this.changeDate = date.getTime();
        await api.put("news/"+ this.id, {
        id:this.id,
        title:this.changeTitle,
        date:this.changeDate,
        image:this.changeImage,
        text:this.changeText
      },
      )
    this.$router.go(0);
    },
    handleFileUpload(event){
    const files = Array.from(event.target.files)
    files.forEach(file => {
    const reader = new FileReader()
    this.name = file.name
    console.log(this.name)
    reader.onload = ev =>{
        const src = ev.target.result
        this.changeImage = src
    }
    reader.readAsDataURL(file)
    })

    },
    resize() {
      const { textarea } = this.$refs;
      textarea.style.height = textarea.scrollHeight+ 'px';
    },
    change(){
        this.showChange = !this.showChange
        this.changeTitle = this.title
        this.changeDate = this.date
        this.changeText = this.text
        this.changeImage = this.image
    },
    },
}
</script>

<style>

.sendBtn{
    padding: 8px;
    margin: 20px 0;
    border-radius: 6;
}
.sendBtn{
    padding: 8px;
    margin: 20px 0;
}

.news__card {
    align-self: center;
    width: 60%;
    border: 2px solid #4761605b;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    margin-top: 20px;
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
    text-align: center;
}
.news__card__title input{
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  outline: none;
  border: 1px solid #476160;
}
.news__card__title input:focus{
  border: 1px solid #60a5a3;
}
.news__card__date {
    align-self: flex-end;
    margin: 20px 0;
    color: #476160;
}
.news__card__date input {
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  outline: none;
  border: 1px solid #476160;
}
.news__card__date input:focus {
  border: 1px solid #60a5a3;
}
.news__card__date {
    align-self: flex-end;
    text-align: center;
    margin: 20px 0;
    color: #476160;
}
.news__card__image{
    align-self: center;
    text-align: center;
}
.news__card__image input{
    margin: 40px;
}
.news__card__image img{
    width: 60%;
}
.news__card__text {
    margin: 20px 0;
    text-align: center;
}
.news__card__text textarea{
    margin: 20px 0;
    width: 100%;

}
.news__card__text strong{
    font-size: 1.3rem;
}
.news__card__text p{
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

.changeBtn svg{
  width: 15px;
  fill: #ffffff;
}
.changeBtn{
  align-self: flex-start;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.changeBtn:active{
  transform: scale(0.9);
}

@media (max-width:1024.95px) {
    .news__card{
        width: 90vw;
    }

}
@media (max-width:425.95px) {

.news {
    margin-top: 20px;
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