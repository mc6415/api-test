<template>
  <div>
    <section
      class="hero is-small is-primary is-bold"
      style="margin-bottom: 10px;"
    >
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">Rick And Morty API</h1>
          <router-link to="/about">
            <b-button>Test</b-button>
          </router-link>
        </div>
      </div>
    </section>
    <section class="container is-fluid filters">
      <b-input v-debounce:400ms="doSearch" v-model="name" />
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
          <transition name="fade">
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
    <hr />
    <section class="pagination">
      <b-pagination :total="count" :current.sync="page" per-page="20" rounded />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import _ from "lodash";
import CharacterCard from "@/components/CharacterCard";
import { get } from "axios";

export default {
  name: "Home",
  components: {
    "character-card": CharacterCard
  },
  data() {
    return {
      characters: [],
      name: "",
      page: 1,
      loading: true,
      pages: "1",
      count: "1"
    };
  },
  watch: {
    page: function() {
      this.getCharacters();
    }
  },
  methods: {
    async doSearch() {
      this.page = 1;
      this.getCharacters();
    },
    async getCharacters() {
      let options = {
        params: _.pick(this, ["page", "name"])
      };

      try {
        let res = await get(
          "https://rickandmortyapi.com/api/character",
          options
        );

        let { results, info } = res.data;

        this.characters = results;
        this.pages = info.pages;
        this.count = info.count;
      } catch (ex) {
        this.characters = [];
      }
    }
  },
  computed: {
    characterChunks() {
      return _.chunk(this.characters, 4);
    }
  },
  created: async function() {
    let options = {
      params: this.params
    };

    get("https://rickandmortyapi.com/api/character/", options).then(res => {
      let { results, info } = res.data;

      // console.log(info);

      this.characters = results;
      this.loading = false;
      this.count = info.count;
    });
  }
};
</script>

<style lang="scss" scoped>
div {
  color: white;
}
</style>
