<template>
    <div class="container">
        <img src="../assets/logo.png" alt="Pokemon logo" style="width: 50rem;">
      <h1>Kanto&Johto Pokédex</h1>
      <PokemonFilter @filterType="filterType" @filterRange="filterRange"/>
      <div class="container pokemon-list">
        <PokemonCard v-for="pokemon in filteredPokemon" :key="pokemon.id" :pokemon="pokemon" :isFavorite="isFavorite(pokemon)" :isTeam="isPokemonInTeam(pokemon)" @toggleFavorite="toggleFavorite" @toggleTeam="toggleTeam"
        />
      </div>
      <PokemonTeam :team="team" @toggleFavorite="toggleFavorite" @toggleTeam="toggleTeam"/>
      <PokemonFavorites :favorites="favorites" @toggleFavorite="toggleFavorite" @toggleTeam="toggleTeam"/>
      <Inventory :inventory="inventory" @buyItem="buyItem"/>
      <Store @addToInventory="addToInventory"/>
    </div>
  </template>
  
  <script>
  import PokemonCard from './PokemonCard.vue';
  import PokemonFilter from './PokemonFilter.vue';
  import PokemonTeam from './PokemonTeam.vue';
  import PokemonFavorites from './PokemonFavorites.vue';
  import Inventory from './Inventory.vue';
  import Store from './Store.vue';
  
  export default {
    components: {
      PokemonCard,
      PokemonFilter,
      PokemonTeam,
      PokemonFavorites,
      Inventory,
      Store,
    },
    data() {
      return {
        pokemonList: [],
        team: [],
        favorites: [],
        inventory: {
          pokeball: 0,
          potion: 0,
          elixir: 0,
        },
        filterType: null,
        filterRange: [1, 251],
      };
    },
    computed: {
      filteredPokemon() {
        return this.pokemonList.filter(pokemon => {
          const inType = this.filterType ? pokemon.types.includes(this.filterType) : true;
          const inRange = pokemon.id >= this.filterRange[0] && pokemon.id <= this.filterRange[1];
          return inType && inRange;
        });
      },
    },
    methods: {
      async fetchPokemon() {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=251');
        const data = await response.json();
        this.pokemonList = await Promise.all(data.results.map(async (pokemon, index) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();
          return {
            id: index + 1,
            name: details.name,
            types: details.types.map(type => type.type.name),
            image: details.sprites.front_default,
          };
        }));
      },
      isFavorite(pokemon) {
      return this.favorites.some(fav => fav.id === pokemon.id);
    },
    isPokemonInTeam(pokemon) {
      return this.team.some(member => member.id === pokemon.id);
    },
    
      toggleFavorite(pokemon) {
        const index = this.favorites.findIndex(p => p.id === pokemon.id);
        if (index === -1) {
          this.favorites.push(pokemon);
        } else {
          this.favorites.splice(index, 1);
        }
      },
      toggleTeam(pokemon) {
        const index = this.team.findIndex(p => p.id === pokemon.id);
        if (index === -1 && this.team.length < 6) {
          this.team.push(pokemon);
        } else if (index !== -1) {
          this.team.splice(index, 1);
        }
      },
      filterType(type) {
        this.filterType = type;
      },
      filterRange(range) {
        this.filterRange = range;
      },
      addToInventory(item) {
        this.inventory[item.name] += item.quantity;
      },
      buyItem(item) {
        this.inventory[item.name] -= item.quantity;
      },
    },
    mounted() {
      this.fetchPokemon();
    },
  };
  </script>
  
  <style scoped>
  .pokemon-list{
    display: flex;
    flex-wrap: wrap;
  }
  </style>
  