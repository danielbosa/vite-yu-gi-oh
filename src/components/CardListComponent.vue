<template>
    <Counter />
    <div class="db-card-container">
        <CardComponent v-for="card in store.cards" :key="card.id" :id="card.id" :name="card.name" :archetype="card.archetype" :image="card.image"/>
    </div>
    
</template>

<script>
import {store} from '../store.js';
import CardComponent from './CardComponent.vue';
import Counter from './Counter.vue';

    export default {
        name: 'CardListComponent',
        components: {
            CardComponent,
            Counter
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '/src/assets/styles/partials/variables' as *;

    .db-card-container{
        display: flex;
        justify-content: flex-start;
        //align-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
    }
</style>