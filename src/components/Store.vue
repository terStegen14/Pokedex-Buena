<template>
  <div class="store">
    <h2>Store</h2>
    <div class="card-deck">
      <div class="card" v-for="item in storeItems" :key="item.name">
        <img :src="item.icon" :alt="item.displayName" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{ item.displayName }}</h5>
          <div class="quantity-selector">
            <button @click="updateQuantity(item, -1)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="updateQuantity(item, 1)">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      storeItems: JSON.parse(JSON.stringify(this.items)) // Copia profunda para evitar mutaciones directas
    };
  },
  methods: {
    updateQuantity(item, amount) {
      const newQuantity = item.quantity + amount;
      if (newQuantity >= 0) {
        this.$emit('update-item-quantity', item.name, newQuantity);
      }
    }
  },
  watch: {
    items: {
      handler(newItems) {
        this.storeItems = JSON.parse(JSON.stringify(newItems));
      },
      deep: true
    }
  }
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
.quantity-selector {
  display: flex;
  align-items: center;
  gap: 10px;
}
.quantity-selector button {
  width: 30px;
  height: 30px;
  font-size: 20px;
  text-align: center;
}
</style>
