<script>
    // UTILITY
    import axios from 'axios';
    import {store} from './store'
    // COMPONENTI
    import AppHeader from './components/AppHeader.vue';
    import AppMain from'./components/AppMain.vue';

    export default {
        name:'App',
        components: {
            AppHeader,
            AppMain,
        },//components
        data() {
            return {
                store,
            };//return
        },//data
        methods: {
            searchFilm() {
                if (this.store.searchText != '') {
                    axios.get('https://api.themoviedb.org/3/search/movie', {
                        params: {
                            api_key: 'e3bcdf9f6b96589610abc1b9aabec335',
                            query: this.store.searchText,
                        }
                    }).then((response) => {
                        this.store.filmList = response.data.results;
                    });
                }
                else {
                    this.store.filmList = [];
                }
            },//searchFilm
        },//methods
    };//export
</script>

<template>
    <AppHeader @search="searchFilm()"/>
    <AppMain/>
</template>

<style lang="scss">
</style>
