<style lang="less">
.todoapp {
    .footer {
        span {
            margin: 0 5px;
        }
        .selected {
            border: 1px solid #eee;
            padding: 0 3px;
        }
    }
}
</style>

<template>
    <section class="todoapp">
        <header class="header">
            <input type="text" @keyup.enter="addTodo">
        </header>
        <section class="main">
            <ul class="todo-list">
                <TodoItem v-for="(todo, index) in filteredTodos" :key="index" :todo="todo"/>  
            </ul>
        </section>
        <footer class="footer" v-show="todos.length > 0">
            <strong>{{ remaining }}</strong>
            <span>{{ remaining | pluralize('item') }} left</span>
            <span v-for="(val, key) in filters" :key="key"
                  :class="{ selected: visibility === key }"
                  @click="visibility = key">{{ key | capitalize }}</span>
            <span v-show="todos.length > remaining"
                  @click="clearCompleted">clear completed</span>
        </footer>
    </section>
</template>

<script>
import TodoItem from '../components/TodoItem';
import { mapActions } from 'vuex'

const filters = {
    all: todos => todos,
    active: todos => todos.filter(todo => !todo.done),
    completed: todos => todos.filter(todo => todo.done)
}
export default {
    name: 'todos',
    data() {
        return {
            visibility: 'all',
            filters: filters
        }
    },
    components: {
        TodoItem
    },
    computed: {
        todos() {
            return this.$store.state.todos;
        },
        filteredTodos() {
            return filters[this.visibility](this.todos);
        },
        remaining() {
            return this.todos.filter(todo => !todo.done).length
        }
    },
    methods: {
        ...mapActions(['clearCompleted']),
        addTodo(e) {
            const text = e.target.value;
            if (text.trim()) {
                this.$store.dispatch('addTodo', text);
            }
            e.target.value = '';
        }
    },
    filters: {
        pluralize: (n, w) => n === 1 ? w : (w + 's'),
        capitalize: item => item.charAt(0).toUpperCase() + item.slice(1)
    },
}
</script>

