<script>
    import "/node_modules/flag-icons/css/flag-icons.css";
    import {store} from '../store';
    export default {
        name:'AppMain',
        data() {
            return {
                store,
            };//return
        },//data
    };//export
</script>

<template>
    <main>
        <h2 v-if="store.filmList.length > 0">FILM</h2>
        <ul>
            <li v-for="film in store.filmList">
                <p>{{ film.title }}</p>
                <p>{{ film.original_title }}</p>
                <p v-if="film.original_language != 'xx'" :class="`fi fi-${film.original_language}`"></p>
                <p>{{ film.vote_average }}</p>
            </li>
        </ul>
        
        <h2 v-if="store.seriesList.length > 0">SERIE TV</h2>
        <ul>
            <li v-for="serie in store.seriesList">
                <p>{{ serie.name }}</p>
                <p>{{ serie.original_name }}</p>
                <p v-if="serie.original_language != 'xx'" :class="`fi fi-${serie.original_language}`"></p>
                <p>{{ serie.vote_average }}</p>
            </li>
        </ul>
    </main>
</template>

<style scoped>
    
</style>