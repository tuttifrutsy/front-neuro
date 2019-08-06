<template>
  <div class="container">
    <!-- eslint-disable -->
    <!-- <b-form  method="POST" @submit.stop.prevent="sendUser" >
      <label for="username">Email</label>
      <input  v-model="user.email" type="email" name="username" placeholder="Ingresa tu email"/>
      <label for="password">Password</label>
      <input v-model="user.password" type="password" name="password" id="password" />
    <button type="submit">log in</button>
    </b-form>-->
    <b-card
      header="Inicia Sesión"
      header-text-variant="white"
      align="center"
      class="login"
    >
    <router-link to="/" ><i class='far fa-arrow-alt-circle-left' style="font-size:30px;"></i></router-link>
      <b-card-text>Completa el formulario para continuar</b-card-text>
      <b-form method="POST" @submit.stop.prevent="sendUser">
        <label for="username">Email</label>
        <input v-model="user.email" type="email" name="username" placeholder="Ingresa tu email" />
        <label for="text-password">Password</label>
        <b-input
          v-model="user.password"
          type="password"
          id="text-password"
          aria-describedby="password-help-block"
          placeholder="Ingresa tu contraseña"
        ></b-input>
        <b-form-text id="password-help-block">
          Your password must be 8-20 characters long, contain letters and numbers, and must not
          contain spaces, special characters, or emoji.
        </b-form-text>
         <b-button type="submit" class="btn">Iniciar Sesión</b-button>
      </b-form>
    </b-card>
    <div>{{msg}}</div>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}
export default {
  name: "Login",
  props: ["msg"],
  data() {
    return {
      user: new User()
    };
  },
  methods: {
    sendUser() {
      //console.log(this.user)
      const authOptions = {
        method: "POST",
        url: "http://localhost:3000/login",
        data: JSON.stringify(this.user),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        json: true,
        withCredentials: true
      };
      axios(authOptions)
        .then(response => {
          this.user = response.data;
          // console.log("Exito",response.data)
          this.$router.push("Dashboard");
        })
        .catch(error => console.log("error", error));
    }
  }
};
</script>
<style>
.login, #password-help-block{
  width: 60%;
  height: 80%;
  margin: auto;
  margin-top: 5%;
  background-color: #194350;
  color: white;
}

input{
  width: 100%;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
}

body{
 background-color: #5c8992;
}

.btn{
  margin-top: 5%;
}

.far{
  position: absolute;
  top:3%;
  left: 5%;
  color: white;
}
</style>



