<template>
  <div id="app">
    <link
      rel="icon"
      type="image/png"
      href="https://s2.googleusercontent.com/s2/favicons?domain=www.nasa.gov"
    />
    <Home />
  </div>
</template>

<script>
import Home from './views/Home.vue'
export default {
  name: 'App',
  components: {
    Home,
  },
  data() {
    return {
      image: {
        github: require('./components/assets/github-2.png'),
      },
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'Play', sans-serif;
  box-sizing: border-box;
}
</style>
