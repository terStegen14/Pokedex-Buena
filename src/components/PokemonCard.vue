<template>
    <div class="pokemon-card">
      <div class="image-container">
        <button class="left-button" @click="toggleTeam" style="transform: rotate(90deg);">
            <i :class="isTeam ? 'bi bi-circle-half' : 'bi bi-circle'" style="color: #ea3103;"></i>
        </button>
        <img class="pokemon-images" :src="pokemon.image" :alt="pokemon.name">
        <button class="right-button" @click="toggleFavorite">
          <i :class="isFavorite ? 'bi bi-heart-fill' : 'bi bi-heart'" style="color: #ea3103;"></i>
        </button>
      </div>
      <h3>{{ pokemon.name }}</h3>
      <p>#{{ pokemon.id }}</p>
      <div class="type-container">
        <div v-for="(type, index) in pokemon.types" :key="index" class="type" :style="{ backgroundColor: typeColors[type.toLowerCase()] }">
          {{ type }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      pokemon: Object,
      isFavorite: Boolean,
      isTeam: Boolean,
    },
    data() {
      return {
        typeColors: {
          normal: '#A8A878',
          fire: '#F08030',
          water: '#6890F0',
          electric: '#F8D030',
          grass: '#78C850',
          ice: '#98D8D8',
          fighting: '#C03028',
          poison: '#A040A0',
          ground: '#E0C068',
          flying: '#A890F0',
          psychic: '#F85888',
          bug: '#A8B820',
          rock: '#B8A038',
          ghost: '#705898',
          dragon: '#7038F8',
          steel: '#B8B8D0',
          fairy: '#EE99AC',
          dark: '#2D383A',
        },
      };
    },
    methods: {
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
  .pokemon-card {
    position: relative;
    border: 5px solid #2c6bb4;
    border-radius: 1rem;
    padding: 10px;
    margin: 10px;
    width: 15rem;
    text-align: center;
    text-transform: capitalize;
    background-color: #ededed;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    transition: transform 0.2s;
  }
  .pokemon-card:hover {
  transform: scale(1.05);
}
  .image-container {
    position: relative;
  }
  
  .pokemon-images {
    width: 6rem;
  }
  
  .type-container {
    display: flex;
    justify-content: center;
  }
  
  .type {
    padding: 2px 6px;
    margin: 0 3px;
    border-radius: 4px;
    color: white;
    font-size: 1rem;
    width: 5rem;
  }
  .left-button{
    position: absolute;
    top: -21%;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .right-button {
    position: absolute;
    top: 15%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  .left-button {
    left: -15%;
  }
  
  .right-button {
    right: -15%;
  }
  </style>
  