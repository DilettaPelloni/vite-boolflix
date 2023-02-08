<script>
    // UTILITY
    import "/node_modules/flag-icons/css/flag-icons.css";
    import {store} from '../store';
    // COMPONENTI
    import ResultSection from './ResultSection.vue';

    export default {
        name:'AppMain',
        components: {
           ResultSection,
        },//components
        data() {
            return {
                store,
            };//return
        },//data
    };//export
</script>

<template>
    <main>
        <section class="welcome" v-if="store.filmList.length == 0 && store.seriesList.length == 0">
            <div class="container">
                <h2>
                    Benvenuto su <span>Boolflix</span>
                </h2>
                <p>Scopri cosa guarderai questa sera utilizzando la barra di ricerca</p>
            </div>
        </section>
        <section v-else>
            <ResultSection section="film" :list="store.filmList"/>
            <ResultSection section="serie" :list="store.seriesList"/>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    main {
        padding: 3rem 0;
        min-height: calc(100vh - 70px);
        background-color: $black-bg;
    }

    .welcome {
        height: 100%;
        color: white;
        .container {
            min-height: calc(100vh - 70px - 6rem);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            h2 {
                font-size: 5rem;
                span {
                    color: $logo-red;
                    text-transform: uppercase;
                }
            }
            p {
                font-size: 1.5rem;
                margin-top: 2rem;
            }
        }
    }



</style>