<template>
  <div>
    <transition-group tag="div" name="fade" class="characterCard columns">
      <div class="column is-one-third"></div>
      <div class="column">
        HELLLLO
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "CharacterCard",
  props: {
    character: {
      type: Object
    }
  },
  created() {
    console.log(this.character);
  }
};
</script>

<style lang="scss" scoped>
.characterCard {
  width: 22vw;
  height: 20vw;
}

p {
  color: black;
}
</style>
