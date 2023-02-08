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
        <ul>
            <li v-for="film in store.filmList">
                <p>{{ film.title }}</p>
                <p>{{ film.original_title }}</p>
                <p v-if="film.original_language != 'xx'" :class="`fi fi-${film.original_language}`"></p>
                <p>{{ film.vote_average }}</p>
                
            </li>
        </ul>
    </main>
</template>

<style scoped>
    
</style>