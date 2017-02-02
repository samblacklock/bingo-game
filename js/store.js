import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ticketString: null,
    tickets: []
  },
  mutations: {
    SET_TICKET_STRING: (state, val) => {
      state.ticketString = val;
    },
    STORE_TICKETS: (state, ticket) => {
      state.tickets.push(ticket);
    }
  },
  actions: {
    storeNumber(context, number) {
      context.commit('SET_CALLED_NUMBER', number)
    }
  },
  getters: {
    ticketString: state => state.ticketString,
    tickets: state => state.tickets
  }
});
