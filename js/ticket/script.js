import store from '../store';
import bus from '../eventBus';

export default {
  name: 'Ticket',
  props: ['numbers'],
  methods: {
    addListeners() {
      bus.$on('newNumberPicked', (number) => {
        this.updateTicket(number);
      });
    },

    buildTicket(numbers) {
      const unsortedTicket = numbers.match(/.{1,2}/g);
      const ticket = [];

      while(unsortedTicket.length) {
        ticket.push(unsortedTicket.splice(0,5));
      };

      this.storeTicket(ticket);

      return ticket;
    },

    storeTicket(ticket) {
      store.commit('STORE_TICKETS', ticket);
    },

    insertNumber(row, i) {
      for(const num of row) {
        if(num.charAt(0) == i || (num == 90 && num.charAt(0) == +i + 1)) {
          return parseInt(num, 10);
        }
      }
    },

    updateTicket(number) {
      const elements = this.$refs.numberCell;

      for(let el of elements) {
        if(el.getAttribute('data-num') == number) {
          el.classList.add('checked');
        }
      }

      this.updateCheckedNumbers();
    },

    updateCheckedNumbers() {
      const checked = this.$refs.ticket.querySelectorAll('.checked').length;
      this.checkedNumbers = 15 - checked;

      if(this.checkedNumbers === 0) this.endGame();
    },

    endGame() {
      this.$refs.ticket.classList.add('winner');
      bus.$emit('gameWon');
    }
  },

  created() {
    this.addListeners();
  },

  data: function() {
    return {
      ticket: this.buildTicket(this.numbers),
      checkedNumbers: this.checkedNumbers || 15,
      rowLength: '012345678'
    }
  }
}
