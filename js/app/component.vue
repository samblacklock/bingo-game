<template>
  <div>
    <h1>HELLO U</h1>
    <game v-for="game of games" :gameString="game"></game>
  </div>
</template>

<script src="./script.js"></script>
<style lang="sass" src="./style.scss" scoped></style>
