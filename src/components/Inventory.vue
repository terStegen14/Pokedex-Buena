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
  props: ['inventory'],
  computed: {
    inventoryItems() {
      return this.inventory.map(item => ({
        ...item,
        icon: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png`
      }));
    }
  }
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
