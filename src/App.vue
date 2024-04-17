<template>
  <LoaderComponent v-if="this.store.loading"/>
  <div>
    <HeaderComponent/>
    <MainComponent @archSearch="setParams()"/>
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
      setParams(){
        if(this.store.archSearch){
          this.store.options.params.archetype = this.store.archSearch;
        } else {
          delete this.store.options.params.archetype
        };
        this.getCards()
      },
      getCards(){
        this.store.loading = true; 
        axios.get(this.store.apiUrl + this.store.endPoint.card, this.store.options).then((res)=>{
          this.store.cards = res.data.data.map((card)=>{
            return{
              id: card.id,
              name: card.name,
              image: card.card_images[0].image_url,
              status: card.archetype,
              text: card.species,
            }
          });
          console.log(this.store.cards)
          this.store.total = res.data.meta.total_rows;
        }).catch((error) =>{
            // handle error
           console.log(error);
           this.store.error.message = error.message;
        }).finally(() =>{
          this.store.loading = false;
        });
      },
      getArchetypes(){
        this.store.loading = true; 
        axios.get(this.store.apiUrl + this.store.endPoint.archetype).then((res)=>{
          this.store.archetypeList = res.data.slice(0,10);
          this.store.archetypeList.unshift(' ')
          console.log(this.store.archetypeList)
        }).catch((error) =>{
            // handle error
           console.log(error);
           this.store.error.message = error.message;
        }).finally(() =>{
          this.store.loading = false;
        });
      },
    },
    created(){
      this.getCards();
      this.getArchetypes();
    }
  }
  
</script>

<style lang="scss" scoped>

</style>