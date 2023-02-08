<script>
    import CardElement from './CardElement.vue'
    export default {
        name:'ResultSection',
        components: {
            CardElement
        },//component   
        props: {
            section: String,
            list: Array,
        },//props
    };//export
</script>

<template>
    <section>
        <div class="container">
            <h2> {{ section }}</h2>
        </div><!-- CHIUSURA CONTAINER -->
        
        <div class="card-box">
            <CardElement :section="section" :list="list"/>
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
        overflow-y: visible;
    }
</style>