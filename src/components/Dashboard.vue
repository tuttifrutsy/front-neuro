<template>
<!-- eslint-disable -->
  <div>
      <div> {{user.msg}} </div>
      <div>
    <h2>My Brain Healty</h2>
    <div class="card">
        <img :src="user.image" alt="">
        <h3 class="title">{{user.nombre.name}}</h3>
        <span>Diágnostico {{user.dx}}</span>
        <span>Alergias</span>
        <ul v-for="alergies in user.alergy">
            <li> {{alergies}} </li>
        </ul>
        <div>
        <button><i class='fas fa-prescription'></i></button>
        <button><i class='fas fa-medkit'></i></button>
        <button><i class='fas fa-stethoscope'></i></button>
        <button><i class='fas fa-heartbeat'></i></button>
        </div>
    </div>
    <!-- <div>
        <ul v-for="medicamento in user.medicamentos">
            <li>{{medicamento}}</li>
        </ul>
    </div>
      <div>
        <ul v-for="estudios in user.estudios">
            <li>{{estudio}}</li>
        </ul>
    </div>
      <div>
        <ul v-for="cita in user.citas">
            <li>{{cita}}</li>
        </ul>
    </div> -->
     
      </div>
      <TodoList v-bind:todos="todos"/>
      <CreateTodo v-on:create-todo="createTodo" />
  </div>
</template>
<script>
/* eslint-disable */
import sweetalert from 'sweetalert'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'  
import router from '../main'
import axios from 'axios'
export default {
    name: 'Dashboard',
    components: {
        TodoList,
        CreateTodo
    },
    data () {
        return {
            user: {},
            todos: [{
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
            }
            ]
        };
    },
    created () {
        this.getUser();
    },
    methods: {      
         createTodo(newTodo) {
             this.todos.push(newTodo);
             sweetalert('Succces', 'To-do Created!', 'success')
         },
         getUser() {
            // fetch('http://localhost:3000/patient')
            // .then(res => res.json())
            // .then(data => console.log(data));
            const authOptions = {
                method: 'GET',
                url: 'http://localhost:3000/patient',
                headers: {
                    'Accept': 'application/json',
                },
                json: true,
                withCredentials: true
            };
            axios(authOptions)
            .then(response => {
                this.user = response.data})
            .catch(err => console.log(err))
        },
       

    }
}
</script>
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  /* margin: auto; */
  text-align: center;
  font-family: arial;
  background-color: #194350;
  color: white;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  margin: auto;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 23%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}
</style>


