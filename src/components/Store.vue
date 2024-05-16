<template>
  <div class="store">
    <h2>Store</h2>
    <div class="card-deck">
      <div class="card" v-for="item in storeItems" :key="item.name">
        <img :src="item.icon" :alt="item.displayName" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{ item.displayName }}</h5>
          <p class="card-text">Price: {{ item.price }} coins</p>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-secondary" @click="decrementQuantity(item)">-</button>
            <button type="button" class="btn btn-secondary">{{ item.quantity }}</button>
            <button type="button" class="btn btn-secondary" @click="incrementQuantity(item)">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      storeItems: [
        { name: 'poke-ball', displayName: 'Pokéball', icon: '', price: 50, quantity: 0 },
        { name: 'great-ball', displayName: 'Great Ball', icon: '', price: 100, quantity: 0 },
        { name: 'ultra-ball', displayName: 'Ultra Ball', icon: '', price: 200, quantity: 0 },
        { name: 'potion', displayName: 'Potion', icon: '', price: 50, quantity: 0 },
        { name: 'elixir', displayName: 'Elixir', icon: '', price: 100, quantity: 0 },
      ],
    };
  },
  async mounted() {
    await this.fetchItemData();
  },
  methods: {
    async fetchItemData() {
      for (const item of this.storeItems) {
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
    incrementQuantity(item) {
      item.quantity++;
    },
    decrementQuantity(item) {
      if (item.quantity > 0) {
        item.quantity--;
      }
    },
  },
};
</script>

<style scoped>
.store {
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
.btn-group {
  margin-top: 10px;
}
</style>
