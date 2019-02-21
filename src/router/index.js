import Vue from 'vue';
import Router from 'vue-router';
import routes from './modules'

Vue.use(Router);

const router = new Router({
    baseUrl: '/',
    mode: 'history',
    routes
});

export default router