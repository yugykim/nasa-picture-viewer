<template>
  <div class="card-container">
    <div class="picture-card">
      <!-- display picture data -->
      <div class="photo-container">
        <span>{{ picture.date }}</span>
        <h4>{{ picture.title }}</h4>
        <img :src="picture.url"/>
      </div>
      <div class="explanation-container">
        <div>
          <span v-if="!readMoreActivated">{{ longText.slice(0, 100) }}</span>
          <a
            class="read-more"
            v-if="!readMoreActivated"
            v-on:click="activateReadMore()"
            href="#"
            >  
               Read More    
          </a>
          <span v-else>{{ longText }}</span>
        </div>
        <div class="isLikedIcon" v-on:click="() => $emit('like', picture)">
          <font-awesome-icon
            id="emptyIcon"
            v-if="!picture.isLiked"
            :icon="['far', 'heart']"
          />
          <font-awesome-icon id="fulledIcon" v-else :icon="['fas', 'heart']" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PictureCard',
  props: {
    picture: Object,
  },
  data() {
    return {
      longText: this.picture.explanation,
      readMoreActivated: false,
    }
  },
  methods: {
    activateReadMore: function () {
      if (!this.readMoreActivated) {
        this.readMoreActivated = true
      } else {
        this.readMoreActivated = false
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-container {
  color: #2c3e50;
}

.picture-card img {
  width: 100%;
}

.picture-card {
  width: 30vw;
  cursor: pointer;
}

.picture-card:hover {
  transform: scale(1.01);
  box-shadow: 0 80px 200px 0 rgba(6, 243, 223, 0.2);
}

.explanation-container {
  column-gap: 2rem;
  font-size: 1.2rem;
  margin: 1rem;
  text-align: left;
}

h4 {
  font-size: 1.3rem;
}

.isLikedIcon {
  font-size: 2em;
  text-align: right;
}

#fulledIcon {
  color: #009000;
}

.read-more {
  text-decoration: none;
  color: #1F51FF;
}

@media screen and (max-width: 1400px) {
  .picture-card {
    width: 40vw;
  }
}

@media screen and (max-width: 844px) {
  .picture-card img {
    width: 100%;
  }

  .picture-card {
    width: 100%;
  }
}

</style>
