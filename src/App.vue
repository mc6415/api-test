<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

body {
  margin: 0 auto;
}

#app {
  background-color: #484953;
  height: 100vh;
  width: 100vw;
}

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
