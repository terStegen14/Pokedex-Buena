<template>
    <div>
      <h2>El Meu Equip</h2>
      <div v-if="team.length === 0">Cap Pokémon seleccionat per l'equip.</div>
      <div v-else class="team-container">
        <PokemonCard v-for="pokemon in team" :key="pokemon.id" :pokemon="pokemon" :isTeam="true"/>
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
    },
  };
  </script>
  
  <style scoped>
  .team-container {
    display: flex;
    flex-wrap: wrap;
  }
  </style>
  