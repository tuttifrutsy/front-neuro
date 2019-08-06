<template>
  <!-- eslint-disable -->
  <div>
    <!-- <b-dropdown
    split
    split-variant="outline-primary"
    variant="primary"
    text="Split Variant Dropdown"
    class="m-2"
  >
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
  </b-dropdown> -->

<div class="container">
  <div>
    <h4>Bienvenido</h4>
    <b-card-group deck>
      <b-card img-src="http://mundoenpositivo.com/wp-content/uploads/2018/08/ejercicio.jpg" img-alt="Card image" img-top>
        <b-card-text>
         Hacer ejercicio en la mediana edad puede mejorar la función cerebral más adelante en la vida
        </b-card-text>
      </b-card>

      <b-card img-src="https://as.com/deporteyvida/imagenes/2018/10/09/portada/1539102690_098224_1539103461_noticia_normal.jpg" img-alt="Card image" img-bottom>
        <b-card-text>
          Una alimentación saludable ayuda a mantener el cerebro en forma
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
  <div class="mt-4">
    <h4>Mi tratamiento</h4><i class='fas fa-medkit'></i>
    <b-card img-src="https://www.discountdrugnetwork.com/wp-content/uploads/2016/08/Heart-Disease-Image_08.03.2016.jpg" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
    </b-card>
      <h4>Cuidados</h4><i class='fas fa-heartbeat'></i>
    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
    </b-card>
     <h4>Proxima Cita</h4><i class='fas fa-stethoscope'></i>
     <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
    </b-card>
  </div>
</div>

    <!-- <span>Nombre:</span>
<p style="white-space: pre-line;">{{ profile.name }}</p>
<span>Apellidos:</span>
<p style="white-space: pre-line;">{{ profile.lastname }}</p>
<span>Edad:</span>
<p style="white-space: pre-line;">{{ profile.age }}</p>
<span>Fecha de nacimiento:</span>
<p style="white-space: pre-line;">{{ profile.date_of_birth }}</p>
<span>Número Móvil:</span>
<p style="white-space: pre-line;">{{ profile.movil_number }}</p>
<h3>Dirección</h3>
<span>Genero:</span>
<p style="white-space: pre-line;">{{ profile.gender }}</p>
<h3>Dirección</h3>
<span>Calle:</span>
<p style="white-space: pre-line;">{{ profile.addres1 }}</p>
<span>Colonia:</span>
<p style="white-space: pre-line;">{{ profile.addres2 }}</p>
<input v-model="profile.name" placeholder="Nombre"/><br>
<input v-model="profile.lastname" placeholder="Apellidos"/><br>
<input v-model="profile.age" placeholder="Edad" type="number" max="120" min="0" /> <br>
<input v-model="profile.date_of_birth" type="date" max="1900-12-31" min="2019-12-31"/><br>
<input type="radio" id="female" value="Mujer" v-model="profile.gender">
<label for="female">Mujer</label>
<br>
<input type="radio" id="male" value="Hombre" v-model="profile.gender">
<label for="male">Hombre</label>
<br>
<input type="radio" id="other" value="Otros" v-model="profile.gender">
<label for="other">Otros</label>
<br>
<input v-model="profile.addres1" placeholder="Calle y número"/><br>
<input v-model="profile.addres2" placeholder="Colonia"/><br>
<button type="submit">Guardar Datos</button> -->
  </div>
</template>
<script>
/* eslint-disable */
class Profile {
     constructor (
         firstname, 
         lastname, 
         date_of_birth, 
         age,
         gender,
         profileImage,
         movil_number,
         address1,
         address2,
         city,)
      {
         this.firstname = firstname
         this.lastname = lastname
         this.date_of_birth = date_of_birth
         this.age = age
         this.movil_number = movil_number
         this.address1 = address1
         this.address2 = address2    
     }
}
export default {
   data () {
     return {
       profile: new Profile ()
     }
   },
   methods: {
     sendProfile () {
       fetch('http://localhost:3000/profile', {
         method: 'POST',
         body: JSON.stringify(this.profile),
         headers:{
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         }
       })
       .then(res => res.json())
       .then(data => console.log(data))
       this.profile = new Profile
     }
   }
  
 }

</script>