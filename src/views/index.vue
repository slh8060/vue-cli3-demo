<template>
    <div>
        <p>123</p>
        <p v-if="true">asda</p>
        <p>{{count}}</p>
    </div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {
            count: this.$store.state.count
        }
    }
}
</script>
