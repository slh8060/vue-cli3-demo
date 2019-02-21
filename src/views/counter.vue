<template>
    <div class="pg-counter">
        <p>Clicked: {{$store.state.clickTimes}} times, now count is {{$store.state.count}}, it is a {{evenOrOdd}}.</p>
        <p>Recent History(last 5 entry): {{ recentHistory }}</p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">incrementIfOdd</button>
        <button @click="incrementAsync">incrementAsync</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'counter',
    computed: {
        ...mapGetters([
            'evenOrOdd',
            'recentHistory'
        ])
        // count() {
        //     return this.$store.state.count;
        // },
        // clickTimes() {
        //     return this.$store.state.clickTimes;
        // }
    },
    methods: {
        ...mapActions([
            'increment',
            'decrement',
            'incrementIfOdd',
            'incrementAsync'
        ])
        // increment() {
        //     this.$store.commit('increment');
        //     this.$store.commit('countClickTimes');
        // },
        // decrement() {
        //     this.$store.commit('decrement');
        //     this.$store.commit('countClickTimes');
        // }
    }
}
</script>

