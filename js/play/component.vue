<template>
  <section>
    <button v-on:click="playBingo" :disabled="gameInProgress">Play Bingo</button>
    <button v-on:click="stopGame" :disabled="!gameInProgress">Stop Game</button>
  </section>
</template>

<script src="./script.js"></script>
<style lang="sass" src="./style.scss" scoped></style>
