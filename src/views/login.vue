<style lang="less">
.pg-login {
    .border {
        border: 1px solid #eee;
    }
}
</style>

<template>
    <div class="pg-login">
        <div>
            <div>
                <span>name</span>&nbsp;&nbsp;
                <input class="border" type="text" v-model="name"/>
            </div>
            <div>
                <span>password</span>&nbsp;&nbsp;
                <input class="border" type="password" v-model="pwd"/>
            </div>
            <div>
                <button class="border" @click="submitForm">submit</button>
                <button class="border" @click="resetForm">reset</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            name: '',
            pwd: ''
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();
        },
        resetForm(e) {
            e.preventDefault();
            this.pwd = '';
            this.name = '';
        }
    }
}
</script>

