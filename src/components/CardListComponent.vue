<template>
    <div class="db-bg-dark db-txt-light p-2">
        Found: ... cards
    </div>
    <div class="db-card-container">
        <CardComponent/>
    </div>
    
</template>

<script>
import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardListComponent',
        components: {
            CardComponent
        },
        data(){
            return{

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

    .db-card{
        //width: calc(100% / 5 - 20px);
        width: 170px;
    }
</style>