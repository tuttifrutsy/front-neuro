<template>
<!-- eslint-disable -->
  <div>
      <div> {{user.msg}} </div>
      <div>
    <h2>My Brain Healty</h2>
    <Profile />
      </div>
    <span> Bienvenido {{ user.name }}</span>
    <!-- <b-card header="Tratamiento" class="text-center">
    <i class='fas fa-medkit'></i><h3>Mis Medicamentos</h3>
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card> -->
    
  </div>
</template>

<script>
/* eslint-disable */
import router from '../main'
import axios from 'axios'
import Profile from './Profile.vue' 

export default {
    name: 'Dashboard',
    components:{
        Profile,
    },
    data () {
        return {
            user: {},
        };
    },
    created () {
        this.getUser();
    },
    methods: {
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
        }

    }
}

</script>


