import Ticket from '../ticket/component.vue';
import store from '../store';

export default {
  name: 'Games',
  methods: {
    spliceTicketString: (ticketString) => {
      const regex = new RegExp('.{1,' + ticketString.length / 6 + '}', 'g');
      return ticketString.match(regex);
    },
  },
  components: {
    Ticket
  },
  data: function() {
    return {
      games: this.spliceTicketString(store.getters.ticketString)
    }
  }
}
