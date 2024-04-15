<template>
    <div class="db-bg-dark db-txt-light p-2">
        Found: ... cards
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

    .db-bg-dark{
        background-color: $bgdark;
    }

    .db-txt-light{
        color: $light;
    }

    .db-card-container{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
    }
</style>