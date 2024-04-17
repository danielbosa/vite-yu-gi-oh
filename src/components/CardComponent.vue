<template>
    <div class="db-card">
        <img class="img-fluid" :src="image" :alt="name">
        <div class="db-card-info text-center">
            <br>
            <div class="db-card-title">
                    {{ name }}
            </div>
            <br>
            <div>
                {{ archetype }}
            </div>
            <br>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: ['id','name','type','image','archetype'],
        data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>
@use '/src/assets/styles/partials/variables' as *;

    .db-card{
        //width: calc(100% / 5 - 20px);
        width: 170px;
    }

    .db-card-title{
        color: $light;
        font-weight: 900;
        text-transform: uppercase;
    }

    .db-card-info{
        background-color: $bgcolored;
        height: 150px;
    }

</style>