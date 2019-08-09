<template>
  <!-- eslint-disable -->
  <div>
 <button v-on:click="openForm" v-if="!isEditing">
            <i class='fas fa-edit'></i>
          </button>
      <div class="card" v-show="isEditing">
      <h4>Actualizar Datos</h4>
      <form action method="POST" v-on:submit.prevent="changeUser">
        <input name="name" type="text" v-model="user.name" placeholder="Nombre" />
        <input name="firstname" type="text" v-model="user.firstname" placeholder="Apellido Paterno" />
        <input name="lastname" type="text" v-model="user.lastname" placeholder="Apellido Materno" />
        <input name="age" type="number" v-model="user.age" placeholder="Edad" />
        <input name="alergy" type="text" v-model="user.alergy" placeholder="Alergias" />
        <div>
        <b-button type="submit"><i class='fas fa-save'></i></b-button>
        <b-button v-on:click="closeForm"><i class='fas fa-window-close'></i></b-button>
        </div>
      </form>
    </div>
    </div>
</template>
<script>
/* eslint-disable */
import sweetalert from 'sweetalert'
class User {
  constructor(name, firstname, lastname, age, alergy) {
    this.name = name;
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.alergy = alergy;
  }
}
export default {
  name: "EditProfile",
  data() {
    return {
      user: new User(),
      isEditing: false,
    }
  },
  methods: {
    openForm() {
      this.isShow = true
    },
    closeForm(){
      this.isShow = false
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
      sweetalert('Bienvenid@!', 'Se ha actualizado tu cuenta.', 'success')
      this.editUser = new editUser();
    }
  }
};
</script>