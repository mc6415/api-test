<template>
  <div>
    <div
      class="characterCard columns"
      :style="{ background: `url(${character.image}) no-repeat center` }"
      @click="$router.push(`/character/${character.id}`)"
    >
      <div class="column is-flex cardDetails" :key="`${character.id}-img`">
        <div class="characterInfo">
          <h1 class="is-size-6">{{ character.name }}</h1>
          <b-icon
            icon="account"
            size="is-small"
            :type="
              (character.status === 'Alive' && 'is-success') ||
                (character.status === 'Dead' && 'is-danger') ||
                'is-warning'
            "
          />
          {{ character.species }} {{ character.gender }} -
          {{ character.status }}
        </div>
      </div>
    </div>
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
p {
  color: black;
}

.characterCard {
  height: 275px;
  display: flex;
}

.cardDetails {
  height: 35%;
  background-color: rgba(0, 0, 0, 0.6);
  align-self: flex-end;
}

.cardDetails > p {
  color: white;
}

.characterInfo {
  align-self: center;
}
</style>
