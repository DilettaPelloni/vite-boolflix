<script>
    import {store} from '../store'
    export default {
        name:'AppHeader',
        data() {
            return {
                store,
            };//return
        },//data
    };//export
</script>

<template>
    <header>
        <div class="container">
            <div class="logo">
                <h1>BOOLFLIX</h1>
            </div>
            <div class="search-bar">
                <form
                    @submit.prevent="$emit('search')"
                >
                    <select
                        name="genreSelect"
                        v-if="store.filmList.length > 0 || store.seriesList.length > 0"
                    >
                        <option value="" selected>Seleziona un genere</option>
                    </select>

                    <div class="search-wrapper">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        <input type="text" v-model="store.searchText" placeholder="Che titolo stai cercando?">
                    </div>

                    <button>
                        Cerca
                    </button>
                </form>
            </div><!-- CHIUSURA SEARCH BAR -->
        </div><!-- CHIUSURA CONTAINER -->
    </header>
    
</template>

<style lang="scss" scoped>

    header {
        width: 100%;
        height: 70px;
        background-color: $black-bg;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 50;
    }

    .container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo > h1 {
        color: $logo-red;
    }

    .search-bar {
        form {
            display: flex;

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
            }//select
            .search-wrapper {
                margin-right: 2rem;
                padding: 0.5rem;
                border: 1px solid white;

                &:hover {
                    background-color: $gray;
                }//search-wrapper hover

                svg {
                    color: white;
                    margin-right: 1rem;
                }//svg
                
                input {
                    color: white;
                    background-color: transparent;
                    border: none;
                    outline: none;
                }//input
            }//search-wrapper

            button {
                padding: 0 2rem;
                text-transform: uppercase;
            }//button
        }//form
    }//search-bar
</style>