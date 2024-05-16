<template>
  <div class="inventory">
    <h2>Inventory</h2>
    <div class="card-deck">
      <div class="card" v-for="item in inventoryItems" :key="item.name">
        <img :src="item.icon" :alt="item.displayName" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{ item.displayName }}</h5>
          <p class="card-text">Quantity: {{ item.quantity }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inventoryItems: [
        { name: 'poke-ball', displayName: 'Pokéball', icon: '', quantity: 0 },
        { name: 'great-ball', displayName: 'Great Ball', icon: '', quantity: 0 },
        { name: 'ultra-ball', displayName: 'Ultra Ball', icon: '', quantity: 0 },
        { name: 'potion', displayName: 'Potion', icon: '', quantity: 0 },
        { name: 'elixir', displayName: 'Elixir', icon: '', quantity: 0 },
      ],
    };
  },
  async mounted() {
    await this.fetchItemData();
  },
  methods: {
    async fetchItemData() {
      for (const item of this.inventoryItems) {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/item/${item.name}`);
          const data = await response.json();
          item.displayName = data.names.find(name => name.language.name === 'en').name;
          item.icon = data.sprites.default;
        } catch (error) {
          console.error('Error fetching item data:', error);
        }
      }
    },
  },
};
</script>

<style scoped>
.inventory {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-deck {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
