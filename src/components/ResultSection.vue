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

    h2 {
        margin-bottom: 1rem;
        color: white;
        font-size: 2rem;
        text-transform: capitalize;
    }

    .card-box {
        margin-left: 3rem;
        display: flex;
        overflow-x: auto;
        width: auto;
    }
</style>