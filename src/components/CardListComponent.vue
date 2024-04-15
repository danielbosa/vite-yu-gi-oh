<template>
    <div class="db-card-counts p-2">
        Found {{this.store.cards.length}} cards
    </div>
    <div class="db-card-container">
        <CardComponent v-for="card in store.cards" :key="card.id" :id="card.id" :name="card.name" :archetype="card.archetype" :image="card.card_images[0].image_url"/>
    </div>
    
</template>

<script>
import {store} from '../store.js';
import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardListComponent',
        components: {
            CardComponent
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

    .db-card-counts{
        background-color: $bgdark;
        color: $light;
        font-weight: 900;
    }

    .db-card-container{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
    }
</style>