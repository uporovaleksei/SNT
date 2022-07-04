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
        <p></p>
    </div>
    <div 
    class="documents__body">
      <div class="document__item"
          v-for="(item,index) in items"
          :index="index"
          :key="index"
          :id="item.id"
          >
        <DeleteBtn
            v-if="isAdmin" 
            :id="item.id" 
            :name="tbname"
            class="deleteBtn"
        />
        <div class="changeButton"
        >
            <button 
            class="changeBtn"
            v-if="isAdmin"
            @click="change(index, item)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"/></svg>
            </button> 
          </div>
        <div class="document__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM336 448V160H256C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V448C48 456.8 55.16 464 64 464H320C328.8 464 336 456.8 336 448z"/></svg>
        </div>
        <div class="document__info">
        <div class="document__title">
          <h1>{{item.title}}</h1>
          <input 
            type="text"
            v-model="changeTitle"
            v-if="changedId === index"
          >
        </div>

        <div class="document__url">
          <a 
            :href="item.document"  
            :download="item.name"
          >{{item.name}}</a>
        </div>
          <input 
          type="file"
          v-if="changedId === index"
          @change ="ChangehandleFileUpload"
          >
        </div>
              <button 
              @click="updateDocs(item.id)"
              v-if="changedId === index"
              class="sendBtn"
              >Подтвердить</button>
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
      changeTitle:null,
      changeDocument:null,
      document: null,
      tbname:'documents',
      changedId: -1,
      name:null,
      changeName:null,
      id:null,
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
  change(index,item){
      this.changedId = index
      this.changeTitle = item.title
  },
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
    ChangehandleFileUpload(event){
      const files = Array.from(event.target.files)
      files.forEach(file => {
        const reader = new FileReader()
        this.changeName = file.name
        console.log(this.changeName)
        reader.onload = ev =>{
          const src = ev.target.result
          this.changeDocument = src
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
    async updateDocs(id){
        await api.put("documents/"+ id, {
        id:id,
        title:this.changeTitle,
        name:this.changeName,
        document:this.changeDocument,
      },
      )
    this.$router.go(0);
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
.document__info{
  gap: 10px;
  display: flex;
  flex-direction: column;
}
.deleteBtn{
  align-self: center !important;
}
.changeButton{
  align-self: center;
}
.changeButton button {
  align-self: center;
}
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
  gap: 60px;
}
.document__item {
  display: flex;
  flex-direction: row;
  align-items: center;
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