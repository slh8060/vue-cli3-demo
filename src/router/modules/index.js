import Index from 'views/index.vue'
import Test from 'views/test.vue'
import Login from 'views/login.vue'
import Counter from 'views/counter.vue'
import Todos from 'views/todos.vue'

export default [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/test',
        name: 'test',
        component: Test
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/counter',
        name: 'counter',
        component: Counter
    },
    {
        path: '/todos',
        name: 'todos',
        component: Todos
    }
]

// export default {
//     '/': {
//         name: 'index',
//         path: 'views/'
//     },
//     '/test': {
//         name: 'test',
//         path: 'views/test'
//     }
// }
