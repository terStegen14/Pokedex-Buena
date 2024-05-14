<template>
    <div class="filters">
      <select @change="filterType">
        <option value="">Tots els tipus</option>
        <option value="fire">Foc</option>
        <option value="water">Aigua</option>
        <option value="grass">Herba</option>
        <!-- Afegir més tipus -->
      </select>
      <PokemonRangeSlider @changeRange="filterRange"/>
    </div>
  </template>
  
  <script>
  import PokemonRangeSlider from './PokemonRangeSlider.vue';
  
  export default {
    components: {
      PokemonRangeSlider,
    },
    methods: {
      filterType(event) {
        this.$emit('filterType', event.target.value);
      },
      filterRange(range) {
        this.$emit('filterRange', range);
      },
    },
  };
  </script>
  
  <style scoped>
  .filters {
    display: flex;
    align-items: center;
  }
  </style>
  