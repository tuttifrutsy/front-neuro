<template>
<!-- eslint-disable -->
  <div>
    <b-jumbotron>
      <template slot="header">Te esperamos</template>
      <hr class="my-4" />
      <b-card-group deck class="container">
        <b-card
          title="Centro Médico ABC Santa Fe"
          img-src="https://image.posta.com.mx/sites/default/files/styles/full_article_desktop/public/hospitalabc-fachada-observatorio.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          
        >
          <b-card-text>Torre de Especialidades Quirurgicas <br> Consultorio 778
          </b-card-text>
        </b-card>
        <b-card
          title="Hospital Ángeles Pedregal"
          img-src="https://hospitalesangeles.com/adminlabase/images/galeria/torre-hospitalizacion-galeria.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          
        >
          <b-card-text>Centro Neurológico <br> Consultorio 159 </b-card-text>
        </b-card>
      </b-card-group>
      <hr class="my-4">
        <h3>Conoce la ruta más cercana</h3>
      <input type="text" v-model.lazy="origin" />
      <input type="text" v-model.lazy="destination" />
      <iframe v-bind:src="src()" width="80%" height="400px" :center="center" :zoom="12"></iframe>
    </b-jumbotron>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "Findme",
  data() {
    return {
      center: {
        lat: 45.508,
        lng: -73.587
      },
      currentPlace: null,
      origin: "Hospital ABC Santa Fe",
      destination: "Hospital Angeles Pedregal",
      url:
        "https://www.google.com/maps/embed/v1/directions?key=AIzaSyAjgQtR0dr9sK2D6vbqqoL4Uuj09NIU7CE"
    };
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    src: function() {
      return (
        this.url + "&origin=" + this.origin + "&destination=" + this.destination
      );
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
    setPlace(place) {
      this.currentPlace = place;
    }
  }
};
</script>
<style scoped>
.card-body{
  background-color: #194350;
  color: white;
  border: #5c8992;
 
}

input{
  width: 30%;
  margin: 2%;
  border: solid 2px #194350;
  border-radius: 0.25rem;
}

.container{
  margin: auto;
  width: 60%;
}

</style>
