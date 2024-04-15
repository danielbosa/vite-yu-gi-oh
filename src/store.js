import {reactive} from 'vue';

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    cards: [],
    total: 0,
    loading: false,
    error: {
        message: null
    }
})