<template>
  <section class="games">
    <ticket v-for="game of games" :numbers="game"></ticket>
  </section>
</template>

<script src="./script.js"></script>
<style lang="sass" src="./style.scss" scoped></style>
