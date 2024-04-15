<template>
  <HeaderComponent/>
  <MainComponent/>
</template>

<script>
import {store} from './store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue'

  export default {
    name: 'App',
    components:{
      HeaderComponent,
      MainComponent,
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getCards(){
        axios.get(this.store.apiUrl).then((res)=>{
          this.store.cards = res.data.data;
          console.log(this.store.cards);
          //this.store.total = res.data.data
        })
      }
    },
    created(){
      this.getCards();
    }
  }
  
</script>

<style lang="scss" scoped>

</style>