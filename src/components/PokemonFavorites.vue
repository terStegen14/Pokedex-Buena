<template>
    <div class="container">
      <h2 style="text-align: center; color: #ededed; font-size: 3rem;">Favorites</h2>
      <div v-if="favorites.length === 0">
        <h5 style="text-align: center; color: #ededed; font-size: 1.5rem;">You don't have favorite Pokémons</h5>
        <img src="../assets/pikasad.jpg" alt="">
      </div>
      <div v-else class="favorites-container">
        <PokemonCard v-for="pokemon in favorites" :key="pokemon.id" :pokemon="pokemon" :isFavorite="true" :isTeam="isPokemonInTeam(pokemon)" 
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
    favorites: Array,
    
    isFavorite: Boolean,
      isTeam: Boolean,
  },
  methods: {
  isPokemonInTeam(pokemon) {
    return this.$parent.team.some(member => member.id === pokemon.id);
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
.favorites-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
