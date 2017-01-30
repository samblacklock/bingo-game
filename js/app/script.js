import Game from '../game/component.vue';

export default {
  name: 'App',
  components: {
    Game
  },
  data() {
    return {
      games: this.$parent.games
    }
  }
}
