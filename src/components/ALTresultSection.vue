<script>
    import {store} from '../store';
    import CardElement from './CardElement.vue';
    export default {
        name:'ALTresultSection',
        components: {
            CardElement
        },//component   
        props: {
            section: String,
        },//props
        data() {
            return {
                store,
                activeLabels: [],
                activeIds: [],
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
                if (this.activeIds.length > 0) {
                    const filteredList = this.store[this.listName].filter((item)=> {
                        let flag = true;
                        this.activeIds.forEach((el) => {
                            if(!item.genre_ids.includes(el)) { flag = false }
                        });//forEach
                        return flag;
                    })
                    return filteredList;
                }
                return this.store[this.listName];
            }//filteredList
        },//computed
        methods: {
            toggleActive(i, id) {
                if(this.activeLabels.includes(i)) {
                    this.activeLabels.splice(this.activeLabels.indexOf(i), 1);
                    this.activeIds.splice(this.activeIds.indexOf(id), 1);
                }
                else {
                    this.activeLabels.push(i);
                    this.activeIds.push(id);
                }
            },//toggleActive
        },//methods
    };//export
</script>

<template>
    <section>
        <div class="container">
            <header>
                <h2> {{ sectionName }}</h2>
                <p class="label"
                    v-for="gen, i in store[genreList]"
                    :class="{
                        active: activeLabels.includes(i),
                    }"
                    @click="toggleActive(i, gen.id)"
                >
                    {{gen.name}}
                </p>
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
            .label {
                margin-right: 0.5rem;
                padding: 0.2rem 0.6rem;
                font-size: 0.7rem;
                text-transform: uppercase;
                border: 1px solid white;
                border-radius: 20px;
                cursor: pointer;

                &:hover {
                    color: $logo-red;
                    border-color: $logo-red;
                }
                &.active {
                    background-color: $logo-red;
                    border-color: transparent;
                    &:hover {
                        color: $black-bg;
                    }
                }
            }
        }//header
    }//container

    .card-box {
        margin-left: 3rem;
        display: flex;
        overflow-x: auto;
        width: auto;
    }
</style>