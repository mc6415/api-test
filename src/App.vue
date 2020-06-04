<template>
  <div id="app">
    <transition name="fade" mode="out-in" style="animation-duration: 0.5s">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

body {
  margin: 0 auto;
}

#app {
  background-color: #484953;
  height: 100%;
  width: 100vw;
}

@import "~vue2-animate/src/sass/vue2-animate.scss";

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
