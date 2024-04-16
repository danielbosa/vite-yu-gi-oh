<template>
    <div id="main" >
        <div class="db-container pb-4">
            <div class="db-container py-4">
             <select v-model="store.archSearch" @change="$emit('archSearch')">
                <option v-for="archetype in store.archetypeList" :value="archetype.archetype_name">
                    {{ archetype.archetype_name }}
                </option>
             </select>
            </div>
            <div class="db-container db-card-wrapper p-5">
                <CardListComponent/>
            </div>
        </div>
    </div>
    
</template>

<script>
import { store } from '@/store';
import CardListComponent from './CardListComponent.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardListComponent
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

    .loading{
        overflow-y: hidden;
    }
</style>