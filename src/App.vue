<template>
  <div id="app">
    <link
      rel="icon"
      type="image/png"
      href="https://s2.googleusercontent.com/s2/favicons?domain=www.nasa.gov"
    />
    <div class="heading">
      <div class="menu">
        <div class="logo">
          <h1>NASA API</h1>
        </div>
        <div id="nav">
          <router-link :to="{ name: 'home' }">Home</router-link>
          <router-link :to="{ name: 'favorite' }">Favorite</router-link>
        </div>
      </div>
    </div>
    <router-view />
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
}

.heading {
  border-bottom: 1px solid black;
  background-color: white;
  box-sizing: border-box;
  padding: 20px 30px;
  margin-bottom: 5rem;
}

.menu {
  display: flex;
  list-style: none;
  margin: 0 auto;
  padding: 0;
}

.logo {
  text-align: left;
  font-size: 1.5rem;
}

router-link {
  font-size: 1.5rem;
  text-align: right;
  display: inline-block;
  padding: 1em;
}

.menu :nth-child(1) {
  margin-right: auto;
}

.menu :nth-last-child(2) {
  margin-right: auto;
}

@media screen and (max-width: 767px) {
  .heading {
    height: 100%;
    margin-bottom: 3rem;
  }

  .logo {
    text-align: left;
    font-size: 1rem;
  }

  .nav li {
    font-size: 1rem;
  }
}
</style>
