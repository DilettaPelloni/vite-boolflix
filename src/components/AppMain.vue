<script>
    import {store} from '../store'
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
                <p>{{ film.original_language }}</p>
                <p>{{ film.vote_average }}</p>
            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>
    
</style>