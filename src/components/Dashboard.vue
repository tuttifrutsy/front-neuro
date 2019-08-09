<template>
  <!-- eslint-disable -->
  <div class="container">
    <h2>My brain Healty</h2>
    <div>
      <div class="card">
        <img :src="user.image" alt />
        <h1 class="title">{{user.nombre.name}}</h1>
        <span>Diágnostico {{user.dx}}</span>
        <span>Alergias</span>
        <ul v-for="alergies in user.alergy">
          <li>{{alergies}}</li>
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
       
        </div>

      <div class="card" >
      <h4>Actualizar Datos</h4>
      <form action method="POST" v-on:submit.prevent="changeUser">
        <input name="name" type="text" v-model="user.name" placeholder="Nombre" />
        <input name="firstname" type="text" v-model="user.firstname" placeholder="Apellido Paterno" />
        <input name="lastname" type="text" v-model="user.lastname" placeholder="Apellido Materno" />
        <input name="age" type="number" v-model="user.age" placeholder="Edad" />
        <input name="alergy" type="text" v-model="user.alergy" placeholder="Alergias" />
        <div>
        <b-button type="submit"><i class='fas fa-save'></i></b-button>
       
        </div>
      </form>
    </div>

      </div>

      </div>
   
    <List />
    </div>
</template>
<script>
/* eslint-disable */
import List from "./List.vue";
crm "../main";
import axios from "axios";
class editUser {
  constructor(name, firstname, lastname, age, alergy) {
    this.name = name;
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.alergy = alergy;
  }
}
export default {
  name: 'Dashboard',
  components: {
    List,
  },
  data() {
    return {
      user: {},
      
    };
  },
  created() {
    this.getUser();
    
  },
  methods: {
    getUser() {
      const authOptions = {
        method: "GET",
        url: "http://localhost:3000/patient",
        headers: {
          Accept: "application/json"
        },
        json: true,
        withCredentials: true
      };
      axios(authOptions)
        .then(response => {
          this.user = response.data;
        })
        .catch(err => console.log(err));
    },
    openForm(){
    this.isEditing = true
  },
  closeForm() {
    this.isEditing = false
  },
  changeUser() {
      fetch("http://localhost:3000/edit", {
        method: "POST",
        body: JSON.stringify(this.editUser),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => console.log(data));
      sweetalert('Bienvenid@!', 'Se ha creado tu cuenta.', 'success')
      this.editUser = new editUser();
    }
  }
};
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
  padding: 2%;
}

button {
  border: none;
  border-radius: 4px;
  outline: 0;
  display: inline-block;
  padding: 8px;
  margin: auto;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 18%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover,
a:hover {
  opacity: 0.7;
}

</style>
