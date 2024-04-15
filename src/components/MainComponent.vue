<template>
    <div id="main">
        <div class="db-container">
            <div class="py-4">
             search bar
            </div>
            <div class="db-container db-card-wrapper p-5">

            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'MainComponent',
        data() {
            
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
        background-color: $bglight;
    }
</style>