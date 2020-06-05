<template>
  <div>
    <transition-group tag="div" name="fade" class="characterCard columns">
      <div class="column is-two-thirds cardImage" :key="`${character.id}-img`">
        <router-link :to="`/character/${character.id}`">
          <img :src="character.image" />
        </router-link>
      </div>
      <div class="column is-one-third" :key="character.id">
        {{ character.name }}
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "CharacterCard",
  props: ["character"],
  created() {}
};
</script>

<style lang="scss" scoped>
.characterCard {
  width: 22vw;
  height: 20vw;
  padding: 10px;
}

p {
  color: black;
}
</style>
