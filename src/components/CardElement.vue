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
            <p>Titolo: {{ item[getTitle(section)] }}</p>
            <p v-if="item[getTitle(section)].toLowerCase() != item[`original_${getTitle(section)}`].toLowerCase()">
                Titolo originale: {{ item[`original_${getTitle(section)}`]}}
            </p>
            <p>
                Lingua originale: 
                <span v-if="item.original_language != 'xx'" :class="`fi fi-${item.original_language}`">  </span>
            </p>
            <div>
                <span>Valutazione: </span>
                <font-awesome-icon
                v-for="i in 5"
                :icon="getStarVote(i, item.vote_average)" />
            </div><!-- CHIUSURA STAR BOX -->
            <p v-if="item.overview != ''">
                Overview:
                <br>
                <span>
                    {{ item.overview }}
                </span>
            </p>
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
        }//img
        .info-box {
            padding: 1.5rem;
            width: 100%;
            height: 100%;
            color: white;
            background-color: rgb(20, 20, 20, 0.9);
            border: 1px solid $logo-red;
            position: absolute;
            top: 0;
            left: 0;
            overflow-y: auto;
            opacity: 0;
            transition: opacity 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            p, div {
                margin-bottom: 1rem;
            }//p
        }//info-box

        &:hover .info-box{
            opacity: 100;
        }//hover card x info box
    }//card
</style>




<!-- Ho fatto questa versione con le card che girano ma mi faceva venire il mal di mare e l'ho cassata -->

<!-- <template>
    <div class="card" v-for="item in list">
        <div class="inner">
            <div class="front">
                <img v-if="item.poster_path != null" :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`" :alt="item[getTitle(section)]">
            </div>

            <div class="back info-box">
                <p>Titolo: {{ item[getTitle(section)] }}</p>
                <p v-if="item[getTitle(section)] != item[`original_${getTitle(section)}`]">
                    Titolo originale: {{ item[`original_${getTitle(section)}`]}}
                </p>
                <p>
                    Lingua originale: 
                    <span v-if="item.original_language != 'xx'" :class="`fi fi-${item.original_language}`">  </span>
                </p>
                <div>
                    <span>Valutazione: </span>
                    <font-awesome-icon
                    v-for="i in 5"
                    :icon="getStarVote(i, item.vote_average)" />
                </div>
                <p v-if="item.overview != ''">
                    Overview:
                    <br>
                    <span>
                        {{ item.overview }}
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .card {
        margin-right: 1rem;
        margin-bottom: 1rem;
        height: 500px;
        perspective: 1000px;
        position: relative;

        .inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.8s;
            transform-style: preserve-3d;
            .front {
                height: 100%;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                
                img {
                    height: 100%;
                    display: block;
                }//img
            }//front

            .info-box {
                padding: 1rem;
                width: 100%;
                height: 100%;
                color: white;
                background-color: rgb(20, 20, 20, 0.9);
                border: 1px solid $logo-red;
                position: absolute;
                top: 0;
                left: 0;
                overflow-y: auto;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                transform: rotateY(180deg);
                p, div {
                    margin-bottom: 1rem;
                }//p
            }//info-box
        }//inner
        
        &:hover .inner {
            transform: rotateY(180deg);
        }//hover card x inner
    }//card
</style> -->