<template>
  <table>
    <tr v-for="game of gameObj">
      <td v-for="num of game">
        {{num}}
      </td>
    </tr>
  </table>
</template>

<script src="./script.js"></script>
<style lang="sass" src="./style.scss" scoped></style>
