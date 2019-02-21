export default {
    increment(context) {
        context.commit('increment');
        context.commit('countClickTimes');
    },
    decrement(context) {
        context.commit('decrement');
        context.commit('countClickTimes');
    },
    incrementIfOdd({ commit, state }) {
        if (state.count % 2 === 0) {
            commit('increment');
        }
    },
    incrementAsync({ commit }) {
        return new Promise((resolve) => {
            setTimeout(() => {
                commit('increment');
                resolve();
            }, 1000)
        })
    },
    addTodo({ commit }, text) {
        commit('addTodo', {
            text,
            done: false
        });
    },
    removeTodo({ commit }, todo) {
        commit('removeTodo', todo);
    },
    toggelTodo({ commit }, todo) {
        commit('editTodo', { todo, done: !todo.done });
    },
    editTodo({ commit }, todo, value) {
        commit('editTodo', { todo, text: value });
    },
    toggleAll({ commit, state }, done) {
        state.todos.forEach((todo) => {
            commit('editTodo', { todo, done });
        })
    },
    clearCompleted({ commit, state }){
        state.todos.filter(todo => todo.done)
        .forEach(todo => {
            commit('removeTodo', todo);
        })
    }
}