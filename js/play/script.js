import store from '../store';
import bus from '../eventBus';

export default {
  name: 'Play',

  methods: {
    addListeners() {
      bus.$on('gameWon', () => {
        this.stopGame();
      });
    },

    generateNumbers() {
      const length = (store.getters.ticketString.length / 2) + 1;
      const numbers = [...Array(length).keys()];
      numbers.shift();

      return numbers;
    },

    removeNumber(number) {
      this.numbers.splice(this.numbers.indexOf(number), 1);
    },

    pickRandomNumber() {
      const numbers = this.numbers;
      const length = numbers.length;

      if(length) {
        const randomNumber = numbers[Math.floor(Math.random() * length)];
        this.removeNumber(randomNumber);

        bus.$emit('newNumberPicked', randomNumber);
        return randomNumber;
      } else {
        this.stopGame();
      }
    },

    playBingo(event) {
      this.gameInProgress = true;
      this.interval = setInterval(() => {
        this.pickRandomNumber();
      }, 500);
    },

    stopGame() {
      clearInterval(this.interval);
      this.gameInProgress = false;
      console.info('Game stopped');
    }
  },

  created() {
    this.addListeners();
    this.numbers = this.generateNumbers();
  },

  data: function() {
    return {
      gameInProgress: this.gameInProgress
    }
  }
}
