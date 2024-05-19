<template>
  <div class="container filters">
    <div class="row">
      <div class="col-md-6">
        <select class="form-select" @change="filterType">
          <option value="">All types</option>
          <option v-for="type in allPokemonTypes" :value="type" :key="type">{{ capitalizeFirstLetter(type) }}</option>
        </select>
      </div>
      <div class="col-md-6">
        <PokemonRangeSlider @changeRange="filterRange"/>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonRangeSlider from './PokemonRangeSlider.vue';

export default {
  components: {
    PokemonRangeSlider,
  },
  data() {
    return {
      allPokemonTypes: [],
    };
  },
  methods: {
    // retorna tots els tipius de pokemon per afergir-los al select
    async fetchPokemonTypes() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/type');
        const data = await response.json();
        this.allPokemonTypes = data.results.map(type => type.name).filter(type => type !== 'stellar' && type !== 'unknown');
      } catch (error) {
        console.error('Error fetching Pokemon types:', error);
      }
    },
    filterType(event) {
      const selectedType = event.target.value;
      // console.log('Tipo seleccionado en filtro:', selectedType);
      this.$emit('filterType', selectedType);
    },
    filterRange(range) {
      this.$emit('filterRange', range);
    },
    capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
  mounted() {
    this.fetchPokemonTypes();
  },
};
</script>


<style scoped>
.filters{
  margin-left: .8rem;
}
</style>
