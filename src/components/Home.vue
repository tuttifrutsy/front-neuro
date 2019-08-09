<template>
  <!-- eslint-disable -->
  <div>
    <Slider />
    <div class="middle">
      <b-button class="btn">
        <router-link to="/signup" class="big">Registrarse</router-link>
      </b-button>
    </div>
    <Cards />
  </div>
</template>
<script>
/* eslint-disable */
import Slider from "./Slider.vue";
import Cards from "./Cards.vue";
export default {
  name: 'Home',
  components: {
    Slider,
    Cards
  }
};
</script>
<style scoped>
ul {
  margin: 0;
  padding: 0;
}

h1 {
  margin: 0;
}

li {
  list-style: none;
}

.middle {
  background-image: url("../assets/bg_05.png");
  width: 100%;
  height: 400px;
}

.btn {
  width: 30%;
  height: 20%;
  color: white;
  margin-top: 15%;
  background-color: #194350;
  border: none;
}

hr {
  border: 0;
  height: 0;
  margin: 2rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.router-link {
  color: #bdc0c1;
}
</style>


