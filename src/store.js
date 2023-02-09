import {reactive} from 'vue'

export const store = reactive ({
    searchText: '',
    filmList: [],
    seriesList: [],
    loaded: false,
});