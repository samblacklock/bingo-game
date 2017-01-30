import Vue from 'vue';
import App from './app/component.vue';

const tickets = "011722475204365360702637497481233455758302154058881928446789061241507324334876840738576186051132437816395663800818206590104559628214294664710935667287132130687703253151692742547985";
const games = parseTicketString(tickets);

const vm = new Vue({
  el: '#app',
  data: () => {
    return {
      games: games
    }
  },
  render: createElement => createElement(App),
});

lookupTable(games);


function parseTicketString(ticketString) {
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
}

function lookupTable(games) {
  window.lookupTable = {};

  games.forEach((a, i) => {
    a.forEach((b) => {
      for(let c in b) {
        window.lookupTable[Object.keys(window.lookupTable).length + 1] = a[b[c]]
      }
    })
  });
}
