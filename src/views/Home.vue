<template>
  <div>
    <section
      class="hero is-medium is-primary is-bold"
      style="margin-bottom: 10px;"
    >
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">
            Rick And Morty API
          </h1>
          <router-link to="/about">
            <b-button>Test</b-button>
          </router-link>
        </div>
      </div>
    </section>
    <section class="container is-fluid">
      <div
        class="columns"
        v-for="(chunk, index) in characterChunks"
        :key="index"
      >
        <div
          tag="div"
          class="column"
          v-for="(character, index) in chunk"
          :key="index"
        >
          <transition name="bounce">
            <character-card
              :character="character"
              v-show="!loading"
              :key="character.id"
              :v-model="character"
            />
          </transition>
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
  methods: {
    testFilter() {
      console.log("hello world");
    }
  },
  computed: {
    characterChunks() {
      return _.chunk(this.characters, 4);
    }
  },
  created: async function() {
    const chars = await getCharacter({ page: 1 });

    this.characters = chars.results;
    this.loading = false;
  }
};
</script>

<style lang="scss" scoped>
div {
  color: white;
}
</style>
