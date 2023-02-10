<script>
    import "/node_modules/flag-icons/css/flag-icons.css";
    import axios from 'axios';
    export default {
        name:'CardElement',
        props: {
            card: Object,
            section: String,
        },//props
        data() {
            return {
                showDetails: false,
                genres: [],
                cast: [],
            };//return
        },//data
        methods: {
            getStarVote(i) {
                const starVote = Math.ceil(this.card.vote_average / 2);
                if(starVote >= i) {
                    return 'fa-solid fa-star';
                }
                return 'fa-regular fa-star';
            },//getStarVote
            getDetails() {
                //trasformo l'id in stringa per poter fare includes in performRequest()
                const stringId = this.card.id.toString()
                this.performRequest(stringId);
                this.performRequest(`${stringId}/credits`);
            },//getDetails
            performRequest(stringId){
                const url = `https://api.themoviedb.org/3/${this.section}/${stringId}`;
                axios.get(url, {
                    params: {
                        api_key: 'e3bcdf9f6b96589610abc1b9aabec335',
                        language: 'it-IT'
                    }
                }).then((response) => {
                    if (stringId.includes('credits')) {
                        this.cast = response.data.cast.splice(0,5);
                        this.scrollDown();
                    }
                    else {
                        this.genres = response.data.genres;
                    };//if
                    this.showDetails = true;
                });//richiesta
            },//performRequest
            scrollDown() {
                // vado a prendere il div "info-box"
                const infoBox = this.$refs.infoBox;
                infoBox.scrollTop = infoBox.scrollHeight;
            },//scrollDown
        },//methods
    };//export
</script>

<template>
    <div class="card" @mouseleave="showDetails = false">
        <!-- IMMAGINE -->
        <img
            v-if="card.poster_path != null"
            :src="`https://image.tmdb.org/t/p/w342${card.poster_path}`"
            :alt="card.title || card.name"
        >
        <!-- INFO BOX -->
        <div class="info-box" ref="infoBox">
            <!-- TITOLO -->
            <p>
                <strong>Titolo:</strong>
                <br>
                {{ card.title || card.name }}
            </p>
            <!-- TITOLO ORIGINALE -->
            <p
                v-if="(card.title || card.name).toLowerCase() != (card.original_title || card.original_name).toLowerCase()"
            >
                <strong>Titolo originale:</strong>
                <br>
                {{ card.original_title || card.original_name }}
            </p>
            <!-- LINGUA -->
            <p class="lang">
                <strong>Lingua originale:</strong>
                <span
                    v-if="card.original_language != 'xx'"
                    :class="`fi fi-${card.original_language}`">
                </span>
            </p>
            <!-- VALUTAZIONE -->
            <div class="star-box">
                <strong>Valutazione: </strong>
                <font-awesome-icon
                    v-for="i in 5"
                    :icon="getStarVote(i)"
                />
            </div>
            <!-- OVERVIEW -->
            <p
                v-if="card.overview != ''"
                class="overview"
            >
                <strong>Overview:</strong>
                <br>
                <span>
                    {{ card.overview }}
                </span>
            </p>
            <!-- BOTTONI -->
            <button v-if="showDetails" @click="showDetails = false">
                Meno info
            </button>
            <button v-else @click="getDetails()">
                Voglio saperne di più
            </button>
            <!-- DETTAGLI -->
            <div v-if="showDetails" class="show-more">
                <!-- GENERE -->
                <div class="genres" v-if="genres.length > 0">
                    <strong>Generi:</strong>
                    <ul >
                        <li v-for="gen in genres">
                            #{{ gen.name }}
                        </li>
                    </ul>
                </div>
                <!-- CAST -->
                <div v-if="cast.length > 0">
                    <strong>Cast:</strong>
                    <ul>
                        <li v-for="member in cast">
                            {{ member.name }}
                        </li>
                    </ul>
                </div>

            </div><!-- CHIUSURA SHOW MORE -->
        </div><!-- CHIUSURA INFO BOX -->
    </div><!-- CHIUSURA CARD -->
</template>

<style lang="scss" scoped>
    .card {
        margin-right: 1rem;
        margin-bottom: 1rem;
        height: 500px;
        position: relative;
        text-align: center;
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
            transition: opacity 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            & > * {
                margin-bottom: 1rem;
            }//margine per figli diretti
            .lang strong {
                margin-right: 0.5rem;
            }
            .star-box svg{
                color: $logo-red;
            }
            p.overview {
                text-align: left;
            }//overview

            button {
                padding: 0.5rem;
                width: 60%;
            }//button

            .show-more {
                text-align: left;
                ul {
                    margin-bottom: 1rem;
                }//ul
                .genres {
                    text-align: center;
                    ul {
                        margin-top: 0.5rem;
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        li {
                            margin-bottom: 0.2rem;
                            width: calc(100% / 3);
                            font-size: 0.8rem;
                        }//li
                    }//ul
                }//genres
            }//show more
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