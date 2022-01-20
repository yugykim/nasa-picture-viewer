<template>
  <div class="home">
    <Loading v-if="loadingOn"/>
    <div v-else class="heading">
      <div class="menu">
        <div class="logo">
          <h1><a href="https://yugykim.github.io/nasa-picture-viewer/#/">NASABOOK</a></h1>
        </div>
        <div id="nav">
          <p>Shopify Frontend Developer Intern Challenge</p>
          <h2><a href="https://github.com/yugykim/nasa-picture-viewer" >Yugy Kim</a></h2>
        </div>
      </div>
    </div>
    <div class="pictures">
      <EventCard
        v-for="picture in pictures"
        :key="picture.copyright"
        :picture="picture"
        v-on:like="onLike"
      />
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import Loading from '@/components/loading.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    EventCard,Loading
  },
  data() {
    return {
      pictures: [],
      query: 'Erik',
      errored: false,
      loadingOn: true,
      showContent: false,
      image: {
        github: require('../components/assets/github-2.png'),
        linkedin: require('../components/assets/linkedin-2.png'),
        portfolio: require('../components/assets/portfolio.png'),
      }
    }
  },
  mounted() {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=GXp4n1FXuapHYjGSdvy76UaQMi4i8WNSe0HZ5U5W&count=12'
      )
      .then((response) => {
        const nasaData = response.data.map((object) => {
          return { ...object, isLiked: false }
        })

        console.log(nasaData)

        this.pictures = nasaData
      })
      .catch((error) => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loadingOn = false)
  },
  methods: {
    onLike: function (picture) {
      picture.isLiked = !picture.isLiked
    }
  },
}
</script>

<style scoped>

.heading, .pictures {
  background-color: black
}

.heading {
  border-bottom: 1px solid black;
  box-sizing: border-box;
  padding: 5rem;
}

.menu {
  display: flex;
  list-style: none;
  margin: 0 auto;
  padding: 0;
}
.logo a {
  color: whitesmoke;
  font-size: 5rem;
  text-decoration: none;
}

#nav {
  font-size: 1.5rem;
  color: white;
}

#nav a {
  text-decoration: none;
  color: #1F51FF;
}


.menu :nth-child(1) {
  margin-right: auto;
}

.menu :nth-last-child(2) {
  margin-right: auto;
}

@media screen and (max-width: 767px) {
  .heading {
    padding: 2em;
  }

  .menu {
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

  .logo a{
    text-align: center;
    font-size: 3.5rem;
  }

}


.pictures {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}


a {
  margin: 1rem;
  color: black;
}

img {
  width: 50px;
}

</style>
