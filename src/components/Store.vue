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
            <button type="button" class="btn btn-secondary">{{ getItemQuantity(item) }}</button>
            <button type="button" class="btn btn-secondary" @click="incrementQuantity(item)">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['inventory'],
  data() {
    return {
      storeItems: [
        { name: 'poke-ball', displayName: 'Pokéball', icon: '', price: 50 },
        { name: 'great-ball', displayName: 'Great Ball', icon: '', price: 100 },
        { name: 'ultra-ball', displayName: 'Ultra Ball', icon: '', price: 200 },
        { name: 'potion', displayName: 'Potion', icon: '', price: 50 },
        { name: 'elixir', displayName: 'Elixir', icon: '', price: 100 },
      ],
    };
  },
  computed: {
    itemQuantities() {
      const quantities = {};
      for (const item of this.inventory) {
        quantities[item.name] = item.quantity;
      }
      return quantities;
    }
  },
  methods: {
    incrementQuantity(item) {
      this.$emit('updateQuantity', { name: item.name, quantity: this.itemQuantities[item.name] + 1 });
    },
    decrementQuantity(item) {
      if (this.itemQuantities[item.name] > 0) {
        this.$emit('updateQuantity', { name: item.name, quantity: this.itemQuantities[item.name] - 1 });
      }
    },
    getItemQuantity(item) {
      return this.itemQuantities[item.name] || 0;
    }
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
