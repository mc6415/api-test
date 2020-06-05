<template>
  <div v-if="!loading">
    <section class="hero is-small is-info is-bold">
      <div class="hero-head">
        <router-link to="/">
          <b-icon icon="arrow-left" size="is-large" class="backButton" />
        </router-link>
      </div>
      <div class="hero-body">
        <div class="container">
          <img :src="character.image" class="is-small avatar" />
          <h1 :class="`title ${character.status}`">
            {{ character.name }} - {{ character.species }}
            {{ character.gender }} - {{ character.status }}
          </h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { get } from "axios";

export default {
  name: "Character",
  data() {
    return {
      character: null,
      loading: true
    };
  },
  beforeCreate: function() {
    let id = this.$route.params.id;

    get(`https://rickandmortyapi.com/api/character/${id}`).then(res => {
      this.character = res.data;
      this.loading = false;
    });
  }
};
</script>

<style lang="scss" scoped>
.backButton {
  border-radius: 50%;
  background-color: rgba(grey, 0.6);
  margin-top: 10px;
  margin-left: 10px;
  color: black;
}

.hero-body {
  text-align: center;
}

.title.Dead {
  color: darkred;
}

.title.Alive {
  color: darkgreen;
}

.title.unknown {
  color: orange;
}

.avatar {
  border-radius: 50%;
}
</style>
