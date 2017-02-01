import Vue from 'vue';
import Games from './games/component.vue';
import Play from './play/component.vue';
import store from './store';

const tickets = "011722475204365360702637497481233455758302154058881928446789061241507324334876840738576186051132437816395663800818206590104559628214294664710935667287132130687703253151692742547985";

const vm = new Vue({
  el: '#app',
  template: `
    <section>
      <games></games>
      <play></play>
    </section>`,
  components: {
    Games,
    Play
  },
  beforeCreate() {
    store.commit('SET_TICKET_STRING',tickets);
  },
  store
});
