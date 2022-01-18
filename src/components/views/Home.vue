<template>
  <div class="pictures">
    <h1>response</h1>
    <EventCard
      v-for="picture in pictures"
      :key="picture.copyright"
      :picture="picture"
      v-on:like="onLike"
    />
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    EventCard,
  },
  data() {
    return {
      pictures: {},
      errored: false,
      loading: true,
    };
  },
  mounted() {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=GXp4n1FXuapHYjGSdvy76UaQMi4i8WNSe0HZ5U5W&count=10"
      )
      .then((response) => {
        const nasaData = response.data.map((object) => {
          return { ...object, isLiked: false };
        });

        console.log(nasaData);

        this.pictures = nasaData;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    onLike: function (picture) {
      picture.isLiked = !picture.isLiked;
    },
  },
};
</script>

<style scoped>
.pictures {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
