import {reactive} from 'vue';

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/',
    endPoint:{
        card: 'cardinfo.php',
        archetype: 'archetypes.php',
    },
    options: {
        params:{
            num: 20,
            offset: 0,
        }
    },
    archSearch: '',
    cards: [],
    archetypeList: [],
    total: 0,
    loading: false,
    error: {
        message: null
    }
})