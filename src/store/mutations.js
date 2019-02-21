export default {
    // counter
    increment(state) {
        state.count ++;
        state.history.push('increment');
    },
    decrement(state) {
        state.count --;
        state.history.push('decrement');
    },
    countClickTimes(state) {
        state.clickTimes ++;
    },
    // todo
    addTodo(state, todo) {
        state.todos.push(todo);
    },
    removeTodo(state, todo) {
        state.todos.splice(state.todos.indexOf(todo), 1);
    },
    editTodo(state, { todo, text = todo.text, done = todo.done }) {
        todo.text = text;
        todo.done = done;
    }
}