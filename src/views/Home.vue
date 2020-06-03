<template>
  <div>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">
            Rick And Morty API
          </h1>
        </div>
      </div>
    </section>
    <section class="container is-fluid">
      <div
        class="columns"
        v-for="(chunk, index) in characterChunks"
        :key="index"
      >
        <div class="column" v-for="(character, index) in chunk" :key="index">
          <character-card :v-model="character" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { getCharacter } from "rickmortyapi";
import _ from "lodash";
import CharacterCard from "@/components/CharacterCard";

export default {
  name: "Home",
  components: {
    "character-card": CharacterCard
  },
  data() {
    return {
      characters: [],
      loading: true,
      page: 1,
      pages: "1",
      count: "1"
    };
  },
  computed: {
    characterChunks() {
      return _.chunk(this.characters, 5);
    }
  },
  created: async function() {
    const chars = await getCharacter({ page: 1 });

    console.log(this);

    this.characters = chars.results;
  }
};
</script>

<style lang="scss" scoped>
div {
  color: white;
}
</style>
