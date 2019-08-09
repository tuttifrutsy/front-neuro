<template>
<!-- eslint-disable -->
<div>
  <div>
    <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    <Todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="todo in todos" v-bind:key="todo.id" :todo.sync="todo"/>
    </div>
  </div>

</template>
<script>
/* eslint-disable */
import sweetalert from 'sweetalert'
import Todo from './Todo'
export default {
  name: 'TodoList',
  props:['todos'],
  components: {
    Todo,
  },
   methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos.splice(todoIndex, 1)
      sweetalert('Deleted!', 'Your To-Do has been deleted.', 'success')
    
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = true;
      sweetalert('Success!', 'To-Do completed!', 'success');
    },
  },
};
</script>
<style>
</style>