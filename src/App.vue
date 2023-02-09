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
            performSearch(arg) {
                //per far sparire eventuale contenuto mostrato in precedenza
                this.store.loaded = false;

                const url = `https://api.themoviedb.org/3/search/${arg}`

                if (this.store.searchText != '') {
                    axios.get(url, {
                        params: {
                            api_key: 'e3bcdf9f6b96589610abc1b9aabec335',
                            query: this.store.searchText,
                            language: 'it-IT'
                        }
                    }).then((response) => {
                        switch (arg) {
                            case 'movie': 
                                this.store.filmList = response.data.results;
                                break;
                                
                            case 'tv': 
                            this.store.seriesList = response.data.results;
                                break;
                        }//switch
                        
                        //per far apparire il contenuto
                        this.store.loaded = true;
                        
                    });//richiesta
                }//if
                else {
                    switch (arg) {
                        case 'movie': 
                            this.store.filmList = '';
                            break;
                            
                        case 'tv': 
                        this.store.seriesList = '';
                            break;
                    }//switch 
                }//else
            },//performSearch
        },//methods
    };//export
</script>

<template>
    <AppHeader @search="performSearch('movie'), performSearch('tv')"/>
    <AppMain/>
</template>

<style lang="scss">
    @import "./style/main.scss";
</style>
