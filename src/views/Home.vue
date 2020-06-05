<template>
  <div>
    <section
      class="hero is-small is-primary is-bold"
      style="margin-bottom: 10px;"
    >
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">Rick And Morty API</h1>
        </div>
      </div>
    </section>
    <section class="container is-fluid filters">
      <b-field grouped group-multiline>
        <b-field label="Name">
          <b-input v-debounce:400ms="doSearch" v-model="name" rounded />
        </b-field>
        <b-field label="status">
          <b-select rounded v-model="status" @input="doSearch">
            <option value="">All</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </b-select>
        </b-field>
        <b-field label="gender">
          <b-select rounded v-model="gender" @input="doSearch">
            <option value="">All</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </b-select>
        </b-field>
      </b-field>
    </section>
    <section class="container is-fluid cardsContainer">
      <div
        class="columns is-mobile"
        v-for="(chunk, index) in characterChunks"
        style="flex-wrap: wrap"
        :key="index"
      >
        <div
          tag="div"
          class="column is-full-mobile characterCardContainer"
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
    <hr />
    <section>
      <b-pagination
        :total="count"
        :current.sync="page"
        per-page="20"
        rounded
        order="is-centered"
        range-before="2"
        range-after="2"
      />
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
      status: "",
      page: 1,
      loading: true,
      pages: "1",
      count: "1",
      gender: ""
    };
  },
  methods: {
    async doSearch() {
      this.page = 1;
      this.getCharacters();
    },
    async getCharacters() {
      let options = {
        // Using underscores pick allows me to add new filter options easily by adding them to the array.
        params: _.pick(this, ["page", "name", "status", "gender"])
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
        this.pages = 1;
        this.count = 0;
      }
    },
    forwardPage() {
      this.page += 1;
    }
  },
  computed: {
    characterChunks() {
      return _.chunk(this.characters, 4);
    },
    characterNames() {
      let allNames = this.characters.map(n => n.name.split(" "));

      // Flatten the array to just get a single array rather than an array of arrays
      // Then use Set in order to just get the unique names
      return [...new Set(_.flatten(allNames))];
    }
  },
  created: async function() {
    let options = {
      params: this.params
    };

    // Create the watcher here in order to debounce it to stop constantly getting new data.
    this.unwatch = this.$watch(
      "page",
      _.debounce(() => {
        this.getCharacters();
      }, 300)
    );

    get("https://rickandmortyapi.com/api/character/", options).then(res => {
      let { results, info } = res.data;

      // console.log(info);

      this.characters = results;
      this.loading = false;
      this.count = info.count;
      this.pages = info.pages;
    });

    window.addEventListener("keyup", e => {
      switch (e.keyCode) {
        case 37:
          this.page > 1 ? (this.page -= 1) : (this.page = 1);
          break;
        case 39:
          this.page < this.pages ? (this.page += 1) : (this.page = this.pages);
          break;
        default:
          break;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
div {
  color: white;
}

.cardsContainer {
  margin-top: 25px;
}

.characterCardContainer {
  background-size: cover;
  margin: 5px;
}
</style>
