<template>
<!-- eslint-disable -->
  <div class="slider">
    <ul class="slides" :style="style">
      <li v-for="(slide,i) in playslides" :key="i">
        <div class="img" :style="{ backgroundImage: `url(${slide.img})` }"></div>
      </li>
    </ul>
    <ul class="indicators">
      <li v-for="(slide,i) in slides" :key="i" @click="selectSlide(i)" :class="i==current ? 'active' : null">
        <div class="item">
          <span class="title">{{slide.title}}</span>
          <span class="progress">
            <div class="fill" :style="{ width: `${percent}%`}"></div>
            <div class="dot"></div>
          </span>
          <p class="mark gram">{{slide.mark}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import image from '../assets/bg_01.png'
import image2 from '../assets/bg_02.png'
import image3 from '../assets/bg_03.png'
import image4 from '../assets/bg_04.png'
/* eslint-disable */
export default {
  name: 'Slider',
  data () {
    return {
     slides: [
      {
        img: image,
        title: "Neurología Vascular",
        mark: "Conoce más"
      },
      {
        img: image4,
        title: "Terapia Endovascular Neurologica",
        mark: "Descubre"
      },
      {
        img: image2,
        title: "My Brain Healty",
        mark: "Cuídate"
      },
      {
        img: image3,
        title: "Avancemos juntos",
        mark: "Neurogram"
      }
    ],
    current: 0,
    percent: 0,
    timer: 0,
    interval: 0,
    progress: 0,
    duration: 5000,
    playslides: []
    }
},
 computed: {
    style() {
      switch (this.current % 2) {
        case 0:
          return { top: "0" };
        case 1:
          return { top: "-100%" };
      }
    }
  },
  methods: {
    selectSlide(i) {
      this.current = i;
      this.playslides[this.current % 2] = this.slides[this.current];
      this.resetPlay();
    },
    process() {
      this.current++;
      if (this.current >= this.slides.length) {
        this.current = 0;
      }
      this.playslides[this.current % 2] = this.slides[this.current];
      this.resetPlay();
    },
    going() {
      let time = new Date().getTime();
      this.percent = Math.floor(100 * (time - this.timer) / this.duration);
    },
    resetPlay() {
      clearInterval(this.interval);
      clearInterval(this.progress);
      this.play();
    },
    stop() {
      clearInterval(this.interval);
      clearInterval(this.progress);
    },
    play() {
      this.timer = new Date().getTime();
      this.progress = setInterval(this.going, this.duration / 100);
      this.interval = setInterval(this.process, this.duration);
    }
  },
  created() {
    this.playslides[0] = this.slides[0];
    this.playslides[1] = this.slides[1];
    this.play();
  }
}
</script>
<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s;
}

.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}

.slide-fade-enter {
  -webkit-transform: translateX(31px);
          transform: translateX(31px);
}

.slide-fade-leave-active {
  -webkit-transform: translateX(-31px);
          transform: translateX(-31px);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 1s;
}

.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  -webkit-transform: translateY(30px);
          transform: translateY(30px);
}

.wrapper {
  height: 70vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.wrapper .social {
  margin-top: 1rem;
}
.wrapper a {
  padding: 0.6rem;
}
.wrapper h1 {
  color: #42b983;
  font-size: 2rem;
  font-weight: 300;
}
.wrapper p {
  color: #7f8c8d;
  font-weight: 100;
}
.wrapper svg {
  fill: currentcolor;
  color: #b8c2cc;
  width: 1.65rem;
  height: 1.65rem;
  display: inline-flex;
}

.slider {
  position: relative;
  z-index: 1;
  overflow: hidden;
  height: 80vh;
}
.slider ul {
  list-style: none;
}
.slider ul.slides {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  transition: top 800ms;
}
.slider ul.slides li {
  height: 100%;
}
.slider ul.slides li .img {
  height: 100%;
  background-size: cover;
  background-position: 50%;
}
.slider ul.indicators {
  position: absolute;
  padding-right: 40px;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  text-align: right;
}
.slider ul.indicators li {
  clear: both;
}
.slider ul.indicators li .item {
  position: relative;
  margin-bottom: 16px;
  float: right;
}
.slider ul.indicators li:last-child .item {
  margin-bottom: 0;
}
.slider ul.indicators li .title {
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Nanum Gothic', sans-serif;
  transition: font-size 0.6s ease-out;
}
.slider ul.indicators li .mark {
  background: none;
  color: #5c8992
}
.slider ul.indicators li .dot {
  position: absolute;
  top: 50%;
  right: -20px;
  margin-top: -5.5px;
  margin-left: 10px;
  width: 11px;
  height: 11px;
  background: #fff;
  border-radius: 50%;
}
.slider ul.indicators li .progress {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 2px;
  margin: 8px 0;
  background: rgba(255,255,255,0.5);
}
.slider ul.indicators li.active .title {
  transition: font-size 0.6s ease-in;
  font-size: 36px;
}
.slider ul.indicators li.active .progress .fill {
  height: 100%;
  background: #fff;
}

.gram {
  font-family: 'Kaushan Script', cursive;
}
</style>

