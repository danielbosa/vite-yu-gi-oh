<template>
    <div class="db-card-counts p-2">
        Found {{ this.store.total }} cards
    </div>
</template>

<script>
import {store} from '../store.js';
    export default {
        name: 'Counter',
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

</style>