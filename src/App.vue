<template>
  <LoaderComponent v-if="this.store.loading"/>
  <div v-if="!this.store.loading">
    <HeaderComponent/>
    <MainComponent/>
  </div>
</template>

<script>
import {store} from './store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import LoaderComponent from './components/LoaderComponent.vue';

  export default {
    name: 'App',
    components:{
      HeaderComponent,
      MainComponent,
      LoaderComponent
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getCards(){
        this.store.loading = true; 
        axios.get(this.store.apiUrl).then((res)=>{
          this.store.cards = res.data.data;
          
        }).catch((error) =>{
            // handle error
           console.log(error);
           this.store.error.message = error.message;
        }).finally(() =>{
          this.store.loading = false;
        });
      }
    },
    created(){
      this.getCards();
    }
  }
  
</script>

<style lang="scss" scoped>

</style>