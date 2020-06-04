<template>
  <div>
    <transition-group tag="div" name="fade" class="characterCard columns">
      <div class="column is-two-thirds cardImage" :key="`${character.id}-img`">
        <img :src="character.image" />
      </div>
      <div class="column is-one-thirds" :key="character.id">
        {{ character.name }}
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "CharacterCard",
  props: ["character"],
  created() {
    console.log(this.character);
  }
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
