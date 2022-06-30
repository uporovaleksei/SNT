<template>
  <div class="delete__btn">
    <button @click="del(name)">X</button>
  </div>
</template>

<script>

import api from '@/api'

export default {
    props: {
      id: Number,
      name: String,
    },
    data() {
      return {
        async del(name) {
          let accept = confirm("Удалить элемент?");
          if (accept) {
            await api.delete(name +"/" + this.id)
            this.$router.go(0);
          } else {
            return
          }
        }
      }
    },
  }
</script>

<style>
  .delete__btn {
    align-self: flex-end;
    margin: 10px 0;
  }

  .delete__btn button {
    font-size: 1.2rem;
    font-weight: 500;
    background: #ce3b3b;
    transition: 0.3s;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .delete__btn button:hover {
    background: #ce3b3b94;
  }

  .delete__btn button:active {
    transform: scale(0.9);
  }
</style>