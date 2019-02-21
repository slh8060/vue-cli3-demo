<style lang="less">
.todo {
    list-style: none;
}
.completed {
    label {
        text-decoration: line-through;
    }
}
</style>

<template>
    <li class="todo" :class="{completed: todo.done}">
        <div>
            <input class="toggle" type="checkbox" @change="toggelTodo(todo)"
                   :checked="todo.done">
            <label v-text="todo.text"></label>
            <button>X</button>
        </div>
    </li>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    name: 'Todo',
    props: ['todo'],
    methods: {
        ...mapActions([
            'toggelTodo'
        ])
    }
}
</script>

