<script>
    import "/node_modules/flag-icons/css/flag-icons.css";
    import {store} from '../store';
    export default {
        name:'CardElement',
        props: {
            section: String,
            list: Array,
        },//props
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
            getTitle(section){
                switch (section) {
                    case 'film': 
                        return 'title';
                        
                    case 'serie': 
                        return 'name';
                }//switch
            },//getTitle
        },//methods
    };//export
</script>

<template>
    <div class="card" v-for="item in list">
        <img v-if="item.poster_path != null" :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`" :alt="item[getTitle(section)]">
        <div class="info-box">
            <p>{{ item[getTitle(section)] }}</p>
            <p>{{ item[`original_${getTitle(section)}`]}}</p>
            <p v-if="item.original_language != 'xx'" :class="`fi fi-${item.original_language}`"></p>
            <div>
                <font-awesome-icon
                v-for="i in 5"
                :icon="getStarVote(i, item.vote_average)" />
            </div><!-- CHIUSURA STAR BOX -->
        </div><!-- CHIUSURA INFO BOX -->
    </div><!-- CHIUSURA CARD -->
</template>

<style lang="scss" scoped>
    .card {
        margin-right: 1rem;
        margin-bottom: 1rem;
        height: 500px;
        position: relative;

        img {
            height: 100%;
            display: block;
        }

        .info-box {
            padding: 1rem;
            width: 100%;
            height: 100%;
            color: white;
            background-color: rgb(20, 20, 20, 0.9);
            position: absolute;
            top: 0;
            left: 0;
            display: none;
        }

        &:hover .info-box {
            display: block;
            border: 1px solid $logo-red;
        }
    }
</style>