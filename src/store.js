import {reactive} from 'vue'

export const store = reactive ({
    searchText: '',
    filmList: [],
    filmGenres: [],
    seriesList: [],
    seriesGenres: [],
    loaded: false,
});