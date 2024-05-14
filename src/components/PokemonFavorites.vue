<template>
    <div class="container">
      <h2>Favorites</h2>
      <div v-if="favorites.length === 0">No Pokémon marked as favorite.</div>
      <div v-else class="favorites-container">
        <PokemonCard v-for="pokemon in favorites" :key="pokemon.id" :pokemon="pokemon" :isFavorite="true" />
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
  },
};
</script>

<style scoped>
.favorites-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
