<template>
  <div v-if="!loading">
    <h1 class="title">{{ character.name }}</h1>
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
  beforeCreate: async function() {
    let id = this.$route.params.id;

    get(`https://rickandmortyapi.com/api/character/${id}`).then(res => {
      this.character = res.data;
      this.loading = false;
    });

    // this.character = char;
    // console.log(this.character);
    // this.loading = false;
  }
};
</script>

<style lang="scss" scoped></style>
