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
        methods: {
            getStarVote(i, vote) {
                const starVote = Math.ceil(vote / 2);
                if(starVote >= i) {
                    return 'fa-solid fa-star';
                }
                return 'fa-regular fa-star';
            },//getStarVote
        },//methods
    };//export
</script>

<template>
    <main>
        <h2 v-if="store.filmList.length > 0">FILM</h2>
        <ul>
            <li v-for="film in store.filmList">
                <img v-if="film.poster_path != null" :src="`https://image.tmdb.org/t/p/w342${film.poster_path}`" :alt="film.title">
                <p>{{ film.title }}</p>
                <p>{{ film.original_title }}</p>
                <p v-if="film.original_language != 'xx'" :class="`fi fi-${film.original_language}`"></p>
                <div>
                    <font-awesome-icon
                    v-for="i in 5"
                    :icon="getStarVote(i, film.vote_average)" />
                </div>
            </li>
        </ul>
        
        <h2 v-if="store.seriesList.length > 0">SERIE TV</h2>
        <ul>
            <li v-for="serie in store.seriesList">
                <img v-if="serie.poster_path != null" :src="`https://image.tmdb.org/t/p/w342${serie.poster_path}`" :alt="serie.name">
                <p>{{ serie.name }}</p>
                <p>{{ serie.original_name }}</p>
                <p v-if="serie.original_language != 'xx'" :class="`fi fi-${serie.original_language}`"></p>
                <div>
                    <font-awesome-icon
                    v-for="i in 5"
                    :icon="getStarVote(i, serie.vote_average)" />
                </div> 
            </li>
        </ul>
    </main>
</template>

<style scoped>
    
</style>