<template>
    <div class="d-flex align-items-center" >
        <span>
            <img src="/images/logo.png" alt="">
        </span>
        <h1>Yu-Gi-Oh Api</h1>
    </div>
</template>

<script>
    export default {
        name: 'HeaderComponent',
        data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>
@use '/src/assets/styles/partials/variables' as *;

    *{
        background-color: $light;
    }

    span img{
        width: 100px;
        padding: 20px;
    }
</style>