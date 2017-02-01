import store from '../store';

export default {
  name: 'Ticket',
  props: ['numbers'],
  methods: {
    buildTicket: function(numbers) {
      const unsortedTicket = numbers.match(/.{1,2}/g);
      const ticket = [];

      while(unsortedTicket.length) {
        ticket.push(unsortedTicket.splice(0,5));
      };

      return ticket;
    },
    storeTicket(ticket) {
      store.commit('STORE_TICKETS', ticket);
    },
    insertNumber: (row, i) => {
      for(const num of row) {
        if(num.charAt(0) == i || (num == 90 && num.charAt(0) == +i + 1)) {
          return num;
        }
      }
    }
  },
  data: function() {
    return {
      ticket: this.buildTicket(this.numbers),
      rowLength: '012345678'
    }
  }
}
