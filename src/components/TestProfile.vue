<template>
 <!-- eslint-disable -->
  <div class="conatiner">
    <h1>My Brain Healty</h1>
    <div class="card">
       <img :src="user.image" alt="user image"> 
       <h1 class="title"> {{user.name}} </h1>
      <span>
        Diagnóstico: {{user.dx}}
      </span>
      <span>Alergias</span>
      <ul v-for="alergies in user.alergy" :key="alergies.id">
        <li>
          {{alergies}} 
        </li>
      </ul>
      <div>
        <button>
          <i class="fas fa-prescription"></i>
        </button>
        <button>
          <i class="fas fa-medkit"></i>
        </button>
        <button>
          <i class="fas fa-stethoscope"></i>
        </button>
        <button>
          <i class="fas fa-heartbeat"></i>
        </button>
        <button v-on:click="openForm" v-if="!isEditing">
          <i class="fas fa-edit"></i>
        </button>
      </div>  
      </div>
      
  </div>
</template>
<script>
/* eslint-disable */
import sweetalert from 'sweetalert'
import List from './List'  
import router from '../main'
import axios from 'axios'
export default {
  name: 'TestProfile',
  components:{
    List, 
  
  },
  data() {
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
    }
  },
  created() {
    this.getUser()
  },
  methods:{
    getUser() {
            fetch('http://localhost:3000/patient')
            .then(res => res.json())
            .then(data => console.log(data));
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