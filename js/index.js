import Vue from 'vue';
import App from './app.vue';
import Game from './game';

class BingoGame {
  constructor(ticketString) {
    this.ticketString = this.splitTicketString(ticketString);
  }

  splitTicketString(ticketString) {
    const arr = ticketString.match(/.{1,30}/g);
    const games = [];
    arr.filter((a) => {
      games.push(a.match(/.{1,2}/g).sort());
    });
    return games;
  }



  initialize() {
    new Vue({
      el: '#app',
      render: function (createElement) {
        return createElement(App)
      }
    })

    console.log(this.ticketString);
  }
};

const newGame = new BingoGame('011722475204365360702637497481233455758302154058881928446789061241507324334876840738576186051132437816395663800818206590104559628214294664710935667287132130687703253151692742547985');

export default newGame.initialize();
