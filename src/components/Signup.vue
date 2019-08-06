<template>
  <!-- eslint-disable -->
  <div class="container">
    <b-card header="Registro" class="signup text-center">
      <div class="pricipal">
      <router-link to="/" ><i class='far fa-arrow-alt-circle-left' style="font-size:30px;"></i></router-link>
      <b-card-text>Crea tu cuenta facilmente</b-card-text>
      </div>
      <form method="POST" v-on:submit.prevent="sendUser">
        <label for="username">Email</label>
        <input v-model="user.email" type="email" name="email" placeholder="Your email" />
        <label for="password">Password</label>
        <input v-model="user.password" type="password" name="password" />
        <b-button>Crear mi cuenta</b-button>
      </form>
      <b-button>
        <router-link to="/login" class="link">Iniciar Sesión</router-link>
      </b-button>
    </b-card>
  </div>
</template>
<script>
/* eslint-disable */
import router from "../main";
class User {
  constructor(name, lastname, password, phone, email) {
    this.name = name;
    this.lastname = lastname;
    this.password = password;
    this.phone = phone;
    this.email = email;
  }
}
export default {
  name: "Signup",
  data() {
    return {
      user: new User()
    };
  },
  methods: {
    sendUser() {
      fetch("http://localhost:3000/signup", {
        method: "POST",
        body: JSON.stringify(this.user),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => console.log(data));
      this.user = new User();
      this.$router.replace({ name: "Home" });
    },
    getError() {
      fetch("http://localhost:3000/signup", {})
        .then(res => res.json())
        .catch(err => console.log(err));
    }
  }
};
</script>
<style>
.signup{
  width: 60%;
  height: 80%;
  margin: auto;
  margin-top: 5%;
  background-color: #194350;
  color: white;
}

body{
 background-color: #5c8992;
}

.btn{
  margin-top: 5%;
}

input{
  width: 100%;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
}

a{
  text-decoration: none;
  color:white;
}
.far{
  position: absolute;
  top:3%;
  left: 5%;
}
</style>
