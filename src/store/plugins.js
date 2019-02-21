import createLogger from 'vuex/dist/logger'

const localStoragePlugin = store => {
    store.subscribe((mutation, { todos }) => {
        window.localStorage.setItem('vuex_todos', JSON.stringify(todos));
    });
}

export default process.env.NODE_ENV !== 'production'
    ? [createLogger(), localStoragePlugin]
    : [localStoragePlugin];