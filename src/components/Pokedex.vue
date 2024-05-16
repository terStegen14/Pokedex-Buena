<template>
  <div class="container">    
    
    <div class="buttons mb-2">
      <button class="btn" @click="currentView = 'all'">All</button>
      <button class="btn" @click="currentView = 'favorites'">Favorites</button>
      <button class="btn" @click="currentView = 'team'">Team</button>
    </div>

    <div class="container pokemon-list" v-if="currentView === 'all'">
      <PokemonFilter :allTypes="allPokemonTypes" @filterType="handleFilterType" @filterRange="filterRange"/>
      <PokemonCard 
        v-for="pokemon in filteredPokemon" 
        :key="pokemon.id" 
        :pokemon="pokemon" 
        :isFavorite="isFavorite(pokemon)" 
        :isTeam="isPokemonInTeam(pokemon)" 
        @toggleFavorite="toggleFavorite" 
        @toggleTeam="toggleTeam"
      />
    </div>
    
    <div v-if="currentView === 'favorites'">
      <PokemonFavorites 
        :favorites="favorites" 
        :team="team" 
        @toggleFavorite="toggleFavorite" 
        @toggleTeam="toggleTeam"
      />
    </div>
    
    <div v-if="currentView === 'team'">
      <PokemonTeam 
        :team="team" 
        :favorites="favorites"
        @toggleFavorite="toggleFavorite" 
        @toggleTeam="toggleTeam"
      />
    </div>
  </div>
</template>

<script>
import PokemonCard from './PokemonCard.vue';
import PokemonFilter from './PokemonFilter.vue';
import PokemonTeam from './PokemonTeam.vue';
import PokemonFavorites from './PokemonFavorites.vue';

export default {
  components: {
    PokemonCard,
    PokemonFilter,
    PokemonTeam,
    PokemonFavorites,
  },
  data() {
    return {
      pokemonList: [],
      team: [],
      favorites: [],
      filterType: '',
      filterRange: [1, 251],
      currentView: 'all',
    };
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
    handleFilterType(type) {
      console.log('Tipo seleccionado en Pokedex:', type);
      this.filterType = type;
    },
    filterRange(range) {
      this.filterRange = range;
    },
  },
  computed: {
    filteredPokemon() {
      if (!this.filterType) {
        return this.pokemonList;
      } else {
        return this.pokemonList.filter(pokemon => pokemon.types.includes(this.filterType));
      }
    }
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
.btn{
  color: #ededed;
  font-size: 1.5rem;
}
</style>
