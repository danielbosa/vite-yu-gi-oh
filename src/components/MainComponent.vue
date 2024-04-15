<template>
    <div id="main">
        <div class="db-container pb-4">
            <div class="db-container py-4">
             search bar
            </div>
            <div class="db-container db-card-wrapper p-5">
                <CardListComponent/>
            </div>
        </div>
    </div>
    
</template>

<script>
import CardListComponent from './CardListComponent.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardListComponent
        },
        data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>
@use '/src/assets/styles/partials/variables' as *;

    #main{
        background-color: $bgcolored;
    }

    .db-container{
        width: 90%;
        margin: 0 auto;
    }

    .db-card-wrapper{
        background-color: $light;
    }
</style>