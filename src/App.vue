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
  background: #642b73; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #c6426e,
    #642b73
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #c6426e,
    #642b73
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: 100%;
  width: 100vw;
}

@import "~vue2-animate/src/sass/vue2-animate.scss";

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
