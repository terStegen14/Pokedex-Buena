<template>
    <div class="container">
      <h2 style="text-align: center; color: #ededed; font-size: 3rem;">Pokémon Team</h2>
      <div v-if="team.length === 0">
        <h5 style="text-align: center; color: #ededed; font-size: 1.5rem;">You don't have any Pokémon in your team</h5>
        <img src="../assets/pikasad.jpg" alt="">
      </div>
      <div v-else class="team-container">
        <PokemonCard v-for="pokemon in team" :key="pokemon.id" :pokemon="pokemon" :isTeam="true" :isFavorite="isFavorite(pokemon)" 
             @toggleFavorite="$emit('toggleFavorite', pokemon)" 
             @toggleTeam="$emit('toggleTeam', pokemon)"/>
      </div>
    </div>
  </template>
  
  <script>
  import PokemonCard from './PokemonCard.vue';
  
  export default {
    components: {
      PokemonCard,
    },
    props: {
      team: Array,
      
      isFavorite: Boolean,
      isTeam: Boolean,
    },
    methods: {
      isFavorite(pokemon) {
        return this.$parent.favorites.some(fav => fav.id === pokemon.id);
      },
      toggleFavorite() {
        this.$emit('toggleFavorite', this.pokemon);
      },
      toggleTeam() {
        this.$emit('toggleTeam', this.pokemon);
      },
    },

  };
  </script>
  
  <style scoped>
  .team-container {
    display: flex;
    flex-wrap: wrap;
  }
  </style>
  