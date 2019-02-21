import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import plugins from './plugins';

Vue.use(Vuex);

let state = {
    count: 0,
    clickTimes: 0,
    history: [],
    todos: JSON.parse(localStorage.getItem('vuex_todos') || '[]')
};

// const getters = {
//     evenOrOdd: state => state.count % 2 === 0 ? 'Odd' : 'Even'
// }

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    plugins
})