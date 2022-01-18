<template>
  <div class="picture-card">
    <!-- display picture data -->
    <span>{{ picture.date }}</span>
    <h4>{{ picture.title }}</h4>
    <img :src="picture.url" />
    <p>{{ picture.explanation }}</p>
    <div v-on:click="() => $emit('like', picture)">
      <font-awesome-icon v-if="!picture.isLiked" :icon="['far', 'heart']" />
      <font-awesome-icon v-else :icon="['fas', 'heart']" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PictureCard",
  props: {
    picture: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.picture-card {
  box-sizing: content-box;
  cursor: pointer;
  border: 1px solid black;
  margin-bottom: 18px;
}

.picture-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
