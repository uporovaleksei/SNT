<template>
<div>
<MainLayout>
        <div class="documents__create__container"
          v-if="isAdmin"
        >
        <div class="documents__create">
            <button
            @click="show =!show"
            >
            {{ show ? 'Закрыть' : 'Создать' }}</button>
        </div>
        <transition name="slide-fade">
        <div class="create__card" v-if="show">
            <div class="create__title">
                <input 
                  type="text" 
                  placeholder="Заголовок"
                  v-model="title"
                >
            </div>
            <div class="create__image">
              <label for="input">Загрузить документ</label>
              <input 
                type="file"
                id="file" 
                ref="file"
                placeholder="Документ"
                @change ="handleFileUpload"
              >
            </div>
            <div class="accept__btn">
                <button @click="createDocs()">Добавить</button>
            </div>
        </div>
        </transition>
      </div>
<div class="documents">
  <div class="documents__container">
    <div class="docuuments__title">
        <h1>Документы</h1>
    </div>
    <div 
    class="documents__body">
      <div class="document__item"
          v-for="item in items"
          :key="item.id"
          :id="item.id"
          >
        <DeleteBtn
            v-if="isAdmin" 
            :id="item.id" 
            :name="tbname"
        />
        <div class="document__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM336 448V160H256C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V448C48 456.8 55.16 464 64 464H320C328.8 464 336 456.8 336 448z"/></svg>
        </div>
        <div class="document__info">
        <div class="document__title">
          <h1>{{item.title}}</h1>
        </div>

        <div class="document__url">
          <a 
            :href="item.document"  
            :download="item.name"
          >{{item.name}} + {{item.id}}</a>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
</MainLayout>
</div>
</template>

<script>
import api from "@/api"
import MainLayout from "@/layouts/Main.vue"
import DeleteBtn from "@/components/DeleteBtn.vue"

  export default {
      components: {
    MainLayout,
    DeleteBtn
  },
  data() {
    return {
      show: false,
      file: null,
      title: null,
      document: null,
      tbname:'documents',
      name:null,
      items:[],
    }
  },
    created(){
    this.getDocs()
  },
    computed: {
    isAdmin(){
      return this.$store.state.user?.is_admin
    }
  },
  methods: {
    handleFileUpload(event){
      const files = Array.from(event.target.files)
      files.forEach(file => {
        const reader = new FileReader()
        this.name = file.name
        console.log(this.name)
        reader.onload = ev =>{
          const src = ev.target.result
          this.file = src
        }
        reader.readAsDataURL(file)
      })

    },
    async createDocs(){
      await api.post("documents", {
        name:this.name,
        title: this.title,
        document: this.file
      },
      )
     this.$router.go(0);
    },
    async getDocs(){
      this.items = await api.get('/documents')
    },
    async del(id){
        let accept = confirm("Удалить элемент?");
        if(accept){
            await api.delete("documents/"+ id)
            console.log(id)
            this.$router.go(0);
        }
        else{
            return
        }
    }
  },
  }
</script>

<style>
.document__icon svg{
  width: 30px;
  fill: #476160;

}
.documents {
  margin: 120px 0;
}
.documents__container {
  width: 80%;
  margin: 0 auto;
}
.docuuments__title h1{
  font-size: 2rem;
  color: #476160;
  font-weight: 600;
}
.documents__body {
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  gap: 20px;
}
.document__item {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.create__image input{
  width: 50%;
  padding: 10px;
  outline: none;
  border: 1px solid #476160;
}
.documents__create__container{
  width: 60%;
  margin: 160px auto 0 auto;

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
.documents__create button{
  margin: 20px 0;
  padding: 10px 25px;
  background: #476160;
  color: #fff;
  border-radius: 50px;
  transition: 0.3s ease;
}
.documents__create button:hover{
 background: #47616086;
}
.documents__create button:active{
 transform: scale(0.9);
}
.accept__btn button{
  margin: 20px 0;
  padding: 10px 25px;
  background: #476160;
  color: #fff;

  border-radius: 0;
  transition: 0.3s ease;
}
.accept__btn button:hover{
  border-radius: 50px;
  background: #47616086;
}
.accept__btn button:active{
 transform: translateY(-5px);
}
.create__image{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}
.create__title {
  width: 100%;
  text-align: center;
}
.create__title input{
  width: 100%;
  padding: 10px;
  outline: none;
  border: 1px solid #476160;
}
.create__title input:focus{
border: 1px solid #60a5a3;
}
.slide-fade-enter-active {
  transition: all 0.3s;
}
.slide-fade-leave-active {
  transition: all .3s;
}
.slide-fade-leave-to
 {
 opacity: 0;

}
.slide-fade-enter{
  opacity: 0;
}
</style>