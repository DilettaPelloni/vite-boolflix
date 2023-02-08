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
        <div class="search-bar">
            <form @submit.prevent="$emit('search')">
                <input type="text" v-model="store.searchText">
                <button>
                    Cerca
                </button>
            </form>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    
</style>