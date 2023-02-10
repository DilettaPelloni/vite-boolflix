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
            list: Array,
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
        },//computed
    };//export
</script>

<template>
    <section>
        <div class="container">
            <h2> {{ sectionName }}</h2>
            
            <select
                name="genreSelect"
                v-if="store.filmList.length > 0 || store.seriesList.length > 0"
            >
                <option value="" selected>Seleziona un genere</option>
            </select>
        </div><!-- CHIUSURA CONTAINER -->
        
        <div class="card-box" v-if="store.loaded">
            <CardElement v-for="item in list" :card="item" :section="section"/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    section {
        margin-bottom: 3rem;
    }

    .container {
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
        }//select
    }//container

    .card-box {
        margin-left: 3rem;
        display: flex;
        overflow-x: auto;
        width: auto;
    }
</style>