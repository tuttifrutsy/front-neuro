<template>
<!-- eslint-disable -->
  <div>
  <div class="container">
    <b-card-group deck>
      <b-card header="Programa una Cita" class="text-center" >
         <!-- <i class="far fa-calendar-alt"></i> -->
         <router-link to='/programación'><i class="far fa-calendar-alt" style="font-size:30px;"></i></router-link>
        <b-card-text>Programa tus citas fácilmente.</b-card-text>
      </b-card>
      <b-card bg-variant="secondary" header="Ubicanos" class="text-cente white">
        <router-link to='/findme'><i class='far fa-hospital' style="font-size:30px;"></i></router-link>
        <b-card-text>Consulta toda la información de contacto y localización</b-card-text>
      </b-card>
      <b-card header="Publicaciones" class="text-center">
        <router-link to='/articles'><i class='fas fa-book' style="font-size:30px;"></i></router-link>
        <b-card-text>Encontarás Artículos Cíentificos</b-card-text>
      </b-card>
    </b-card-group>
  </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'Cards',
}
</script>
<style scoped>
.text-center{
color: white;
background-color: #194350;
}
.fas, .far{
  color: #5c8992;
  padding: 2%;
}
.container{
  background-color: #5c8992;
  padding-bottom: 10%;
}

.fa-hospital{
  color: #194350;
}
.white{
  color: white;
}
</style>
