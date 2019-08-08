<template>
  <!-- eslint-disable -->
  <div class="container">
    <!-- Tabs with card integration -->
    <form method="POST" v-on:submit.prevent="sendUser">
       <b-card no-body class="info">
      <b-tabs v-model="tabIndex" small card>
        <b-tab title="Datos" class="font">
          <span>Nombre: {{user.name}}</span>
          <br />
          <span>Apellido Paterno: {{user.firstname}}</span>
          <br />
          <span>Apellido Materno: {{user.lastname}}</span>
          <br />
          <input type="text" v-model="user.name" name="name" placeholder="Nombre" required />
          <input
            type="text"
            v-model="user.firstname"
            name="name"
            placeholder="Apellido Paterno"
            required
          />
          <input
            type="text"
            v-model="user.lastname"
            name="name"
            placeholder="Apellido Materno"
            required
          />
        </b-tab>
        <b-tab title="General">
          <input type="date" v-model="user.dateB" max="31-12-1900" min="31-12-2019" required />
          <input type="radio" id="female" value="Mujer" v-model="user.gender" />
          <label for="female">Mujer</label>
          <input type="radio" id="male" value="Hombre" v-model="user.gender" />
          <label for="male">Hombre</label>
          <input type="radio" id="other" value="Otros" v-model="user.gender" />
          <label for="other">Otros</label>
        </b-tab>
        <b-tab title="Contacto">
          Datos de Contacto <br>
          <span>Email: {{user.email}}</span>
          <br />
          <span>Número Movil: {{user.phone}}</span>
          <input
            type="email"
            name="email"
            required
            placeholder="email@algo.com"
            v-model="user.email"
          />
          <input type="text" name="phone" placeholder="55-00-00-00-00" v-model="user.phone" />
        </b-tab>
        <b-tab title="Contraseña">
          <b-button @click="generate()">Generar Contraseña</b-button>
          <b-input
            type="password"
            id="text-password"
            v-model="user.password"
            placeholder="***********"
          ></b-input>
          <span>Contraseña: {{pwd}}</span>
        </b-tab>
        <b-tab title="Crear">
          <b-button type="submit">Registrar Paciente</b-button>
        </b-tab>
      </b-tabs>
      <b-button-group class="mt-2">
        <b-button @click="tabIndex--">Previous</b-button>
        <b-button @click="tabIndex++">Next</b-button>
      </b-button-group>
    </b-card>
    </form>
   


  </div>
</template>
<script>
/* eslint-disable */
class User {
  constructor(
    name,
    firstname,
    lastname,
    email,
    password,
    phone,
    dateB,
    gender
  ) {
    this.name = name;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.dateB = dateB;
    this.gender = gender;
  }
}
export default {
  components: {},
  data() {
    return {
      tabIndex: 1,
      user: new User(),
      pwd: ""
    };
  },
  created() {
    this.generate();
  },
  methods: {
    generate() {
      let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321";
      let pwd = "";
      for (let i = 0; i < characters.length; i++) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      this.pwd = pwd;
    },
    sendUser() {
      fetch('http://localhost:3000/signup', {
        method: 'POST',
        body: JSON.stringify(this.user),
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then( res => res.json())
      .then(data => console.log(data));
      this.user = new User ();
      sweetalert('Succces', 'To-do Created!', 'success')
       this.$router.replace({name:'Admin'});
    }
  }
};
</script>
<style scoped>
body {
  background-color: #5c8992;
}
.info {
  width: 60%;
  height: 80%;
  margin: auto;
  margin-top: 5%;
  background-color: #a9bab0;
  border: solid 1px #194350;
  color: #194350;
  font-weight: bold;
  text-align: left;
}

input {
  width: 100%;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  border: solid 2px #194350;
  margin-top: 5%;
  color: black;
}

.btn {
  margin: 5%;
  border: solid 3px #194350;
}

.far {
  position: absolute;
  top: 3%;
  left: 5%;
  color: white;
}

.card-header {
  color: white;
}
</style>

