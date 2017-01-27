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
  const arr = ticketString.match(/.{1,30}/g);
  const games = [];
  arr.filter((a) => {
    games.push(a.match(/.{1,2}/g).sort());
  });
  return arr; //remember to change this back
}
