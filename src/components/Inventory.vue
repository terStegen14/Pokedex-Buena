<template>
  <div class="container">
    <h2 class="text-center mb-4" style="color: #ededed;">Inventory</h2>
    <div class="card-deck">
      <div class="card" v-for="item in inventoryItems" :key="item.name">
        <img :src="item.icon" :alt="item.displayName">
        <div class="card-body">
          <h5 class="card-title">{{ item.displayName }}</h5>
          <p class="card-text">Quantity: {{ item.quantity }}</p>
        </div>
      </div>
    </div>
    <!-- Botiga -->
    <Store :items="inventoryItems" @update-item-quantity="updateItemQuantity" />
  </div>
</template>

<script>
import Store from './Store.vue';

export default {
  components: {
    Store
  },
  data() {
    return {
      // objectes predefinits
      inventoryItems: [
        { name: 'poke-ball', displayName: 'Pokéball', icon: '', quantity: 0, price: 200, maxQuantity: 15 },
        { name: 'great-ball', displayName: 'Great Ball', icon: '', quantity: 0, price: 600, maxQuantity: 15 },
        { name: 'ultra-ball', displayName: 'Ultra Ball', icon: '', quantity: 0, price: 1200, maxQuantity: 15 },
        { name: 'potion', displayName: 'Potion', icon: '', quantity: 0, price: 300, maxQuantity: 5 },
        { name: 'elixir', displayName: 'Elixir', icon: '', quantity: 0, price: 800, maxQuantity: 5 },
      ],
    };
  },
  async mounted() {
    // carregar inventari
    await this.fetchItemData();
  },
  methods: {
    // peticion a la api dels objectes predefinits
    async fetchItemData() {
      for (const item of this.inventoryItems) {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/item/${item.name}`);
          const data = await response.json();
          // per a que surti bé el nom
          item.displayName = data.names.find(name => name.language.name === 'en').name;
          item.icon = data.sprites.default;
        } catch (error) {
          console.error('Error fetching item data:', error);
        }
      }
    },
    updateItemQuantity(name, quantity) {
      const item = this.inventoryItems.find(item => item.name === name);
      if (item) {
        item.quantity = quantity;
      }
    }
  }
};
</script>

<style scoped>
.card-deck {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.card {
  background: #ededed;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border: 5px solid #2c6bb4;
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.05);
}
.card-body {
  text-align: center;
}
.card-title {
  font-size: 18px;
  color: #2c6bb4;
}
</style>
