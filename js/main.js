import Vue from 'vue';
import App from './app/component.vue';

const tickets = "011722475204365360702637497481233455758302154058881928446789061241507324334876840738576186051132437816395663800818206590104559628214294664710935667287132130687703253151692742547985";
const gameTickets = splitTicketString(tickets);

const vm = new Vue({
  el: '#app',
  data: () => {
    return {
      games: gameTickets
    }
  },
  render: createElement => createElement(App),
});


function splitTicketString(ticketString) {
  const schema = { 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '' };
  const gameArray = [];

  const arr = ticketString.match(/.{1,10}/g);
  const games = arr.map((row) => {
    return row.match(/.{1,2}/g)
  });

  games.forEach((num) => {
    const gameObj = JSON.parse(JSON.stringify(schema));

    num.forEach((num) => {
      const index = num.charAt(0);
      gameObj[index] = parseInt(num, 10);

      if(gameObj[9]) {
        gameObj[8] = gameObj[9];
      }

      delete gameObj[9];
    });

    gameArray.push(gameObj);
  });

  let newArray = [];

  while(gameArray.length) {
    newArray.push(gameArray.splice(0,3));
  }

  return newArray;
}
