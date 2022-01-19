<template>
  <div class="home">
    <div class="pictures">
      <EventCard
        v-for="picture in pictures"
        :key="picture.copyright"
        :picture="picture"
        v-on:like="onLike"
      />
      <footer>
        <h1>Shopify Frontend Developer Intern Challenge</h1>
        <h2>Yugy Kim</h2>
        <a href="https://github.com/yugykim/Nasa_API"
          ><img :src="image.github"
        /></a>
        <a href="https://www.linkedin.com/in/yugyeong-kim-20a16b225/"
          ><img :src="image.linkedin"
        /></a>
        <a href="https://www.yugyportfolio.com"
          ><img :src="image.portfolio"
        /></a>
      </footer>
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    EventCard,
  },
  data() {
    return {
      pictures: {},
      errored: false,
      loading: true,
      showContent: false,
      image: {
        github: require('../components/assets/github-2.png'),
        linkedin: require('../components/assets/linkedin-2.png'),
        portfolio: require('../components/assets/portfolio.png'),
      },
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
      .finally(() => (this.loading = false))
  },
  methods: {
    onLike: function (picture) {
      picture.isLiked = !picture.isLiked
    },
  },
}
</script>

<style scoped>
.pictures {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

footer {
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 5em;
  border-top: 1px solid black;
}

a {
  margin: 1rem;
  color: black;
}

img {
  width: 50px;
}

@media screen and (max-width: 767px) {
  footer {
    text-align: center;
    padding: 2em;
    font-size: 10px;
  }

  h2 {
    font-size: 30px;
  }
}
</style>
