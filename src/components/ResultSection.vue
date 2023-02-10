<script>
    import {store} from '../store';
    import CardElement from './CardElement.vue';
    export default {
        name:'ResultSection',
        components: {
            CardElement
        },//component   
        props: {
            section: String,
        },//props
        data() {
            return {
                store,
            };//return
        },//data
        computed: {
            sectionName() {
                switch (this.section) {
                    case 'movie':
                        return 'Film'
                    case 'tv':
                        return 'Serie'
                }
            },//sectionName
            listName() {
                switch (this.section) {
                    case 'movie':
                        return 'filmList'
                    case 'tv':
                        return 'seriesList'
                }
            },//listName
            genreList() {
                switch (this.section) {
                    case 'movie':
                        return 'filmGenres'
                    case 'tv':
                        return 'seriesGenres'
                }
            },//genreList
            searchResult() {
                switch (this.section) {
                    case 'movie':
                        return 'searchFilmGenre'
                    case 'tv':
                        return 'searchSerieGenre'
                }
            },//searchResult
            filteredList() {
                if (this.store[this.searchResult] != '') {
                    const genId = this.store[this.searchResult];
                    const filteredList = this.store[this.listName].filter((item)=> item.genre_ids.includes(genId))
                    return filteredList;
                }
                return this.store[this.listName];
            }//filteredList
        },//computed
    };//export
</script>

<template>
    <section>
        <div class="container">
            <header>
                <h2> {{ sectionName }}</h2>
                <select
                    name="genreSelect"
                    v-model="store[searchResult]"
                >
                    <option value="" selected>Seleziona un genere</option>
                    <option
                        :value="gen.id"
                        v-for="gen in store[genreList]"
                    >
                        {{ gen.name }}
                    </option>
                </select>
            </header>

            <div class="no-result" v-if="filteredList.length == 0">
                <p>La ricerca non ha prodotto risultati</p>
            </div>
        </div><!-- CHIUSURA CONTAINER -->

        <div
        class="card-box" v-if="store.loaded">
            <CardElement v-for="item in filteredList" :card="item" :section="section"/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    section {
        margin-bottom: 3rem;
        color:white
    }

    .container {
        margin-bottom: 1rem;
        .no-result {
            height: 500px;
        }//no-result
        header {
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            h2 {
                margin-right: 2rem;
                color: white;
                font-size: 2rem;
                text-transform: capitalize;
            }//h2
            select {
                margin-right: 2rem;
                padding: 0.5rem;
                border: 1px solid white;
                outline: none;
                color: white;
                background-color: transparent;

                &:hover {
                    background-color: $logo-red;
                    border-color: $logo-red;
                }//select:hover
                option {
                    background-color: $black-bg;
                }//option
            }//select
        }//header
    }//container

    .card-box {
        margin-left: 3rem;
        display: flex;
        overflow-x: auto;
        width: auto;
    }
</style>