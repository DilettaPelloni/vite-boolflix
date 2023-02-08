<script>
    import axios from 'axios';
    import {store} from './store'
    import AppHeader from './components/AppHeader.vue';
    export default {
        name:'App',
        components: {
            AppHeader,
        },//components
        data() {
            return {
                store,
            };//return
        },//data
        methods: {
            searchFilm() {
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: 'e3bcdf9f6b96589610abc1b9aabec335',
                        query: this.store.searchText,
                        language: 'it-IT',
                    }
                }).then((response) => {
                    console.log(response.data.results);
                });
                console.log(this.store.searchText)
            },//searchFilm
        },//methods
    };//export
</script>

<template>
    <AppHeader @search="searchFilm()"/>
</template>

<style lang="scss">
</style>
