import Vue from 'vue';
import Router from 'vue-router';

import Pokedex from './components/Pokedex.vue';
import PokemonTeam from './components/PokemonTeam.vue';
import PokemonFavorites from './components/PokemonFavorites.vue';
import Inventory from './components/Inventory.vue';
import Store from './components/Store.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pokedex',
      component: Pokedex
    },
    {
      path: '/team',
      name: 'PokemonTeam',
      component: PokemonTeam
    },
    {
      path: '/favorites',
      name: 'PokemonFavorites',
      component: PokemonFavorites
    },
    {
      path: '/inventory',
      name: 'Inventory',
      component: Inventory
    },
    {
      path: '/store',
      name: 'Store',
      component: Store
    }
  ]
});
