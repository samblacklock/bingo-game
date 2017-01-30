import Game from '../game/component.vue';

export default {
  name: 'App',
  components: {
    Game
  },
  data() {
    return {
      games: this.parseTicketString(this.$parent.games)
    }
  },
  methods: {
    parseTicketString(ticketString) {
      const schema = { 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' };
      const gameArray = [];

      const gameRows = ticketString.match(/.{1,10}/g).map((row) => {
        return row.match(/.{1,2}/g)
      });

      for(let row of gameRows) {
        const gameObj = JSON.parse(JSON.stringify(schema));

        row.forEach((num) => {
          const index = num.charAt(0);
          gameObj[index] = parseInt(num, 10);

          if(gameObj[9]) {
            gameObj[8] = gameObj[9];
          }

          delete gameObj[9];
        });

        gameArray.push(gameObj);
      };

      let sortedGames = [];

      while(gameArray.length) {
        sortedGames.push(gameArray.splice(0,3));
      }

      return sortedGames;
    },

    generateLookupTable(games) {
      const lookupTable = {};
      games.forEach((game) => {
        game.forEach((b) => {
          for(let c in b) {
            (function(c, b) {
              let index = Object.keys(lookupTable).length + 1;
              lookupTable[index] = null;
              Object.defineProperty(lookupTable, index, {
                get: () => { return b[c] },
                set: (val) => { b[c] = val; return val }
              });
            })(c, b);
          }
        })
      });

      return lookupTable;
    },

    playBingo(numbers) {
      console.log(numbers);
    }
  },
  created() {
    const games = this.$data.games;
    this.table = this.generateLookupTable(games);
    console.log(this.table);
    this.playBingo(games);
  }
}
