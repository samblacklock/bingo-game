<template>
  <table>
    <tr v-for="row of ticket">
      <td ref="numberCell" v-for="i of rowLength" :data-num="insertNumber(row, rowLength[i])">
        {{ insertNumber(row, rowLength[i]) }}
      </td>
    </tr>
  </table>
</template>

<script src="./script.js"></script>
<style lang="sass" src="./style.scss" scoped></style>
