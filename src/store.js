import {reactive} from 'vue'

export const store = reactive ({
    searchText: '',
    searchFilmGenre: '',
    searchSerieGenre: '',
    filmList: [],
    filmGenres: [],
    seriesList: [],
    seriesGenres: [],
    loaded: false,
});