<template>
<!-- eslint-disable -->
  <div>
    <TodoList v-bind:todos="todos"/>
    <CreateTodo v-on:create-todo="createTodo"/>
  </div>
</template>
<script>
/* eslint-disable */
import sweetalert from 'sweetalert'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList' 
export default {
  name: 'List',
  components:{
    TodoList,
    CreateTodo
  },
  data() {
    return {
      todos: [
        {
                title: 'todo A',
                description: 'Description A',
                done: false,
            },
            {
                title: 'El b',
                description: 'Description b',
                done: false,
            },
            {
                title: 'El c',
                description: 'Description c',
                done: false,
            },
            {
                title: 'El d',
                description: 'Description d',
                done: true,
            }]
    }
  },
  methods:{
    createTodo(newTodo) {
      this.todos.push(newTodo);
      sweetAlert('Completado', 'Se ha agragado a la lista de Tareas', 'success');
    }
  }
}
</script>