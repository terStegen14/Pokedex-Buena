<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4" style="color: #ededed;">Store</h2>
    <div class="card-deck">
      <div class="card" v-for="item in storeItems" :key="item.name">
        <img :src="item.icon" :alt="item.displayName">
        <div class="card-body">
          <h5 class="card-title">{{ item.displayName }}</h5>
          <p class="card-text">Price: {{ item.price }} PokéCoins</p>
          <div class="quantity-selector">
            <button class="btn btn-primary btn-sm" @click="updateQuantity(item, -1)">-</button>
            <span>{{ item.quantity }}</span>
            <button class="btn btn-primary btn-sm" @click="updateQuantity(item, 1)">+</button>
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
      storeItems: JSON.parse(JSON.stringify(this.items))
    };
  },
  methods: {
    updateQuantity(item, amount) {
      const newQuantity = item.quantity + amount;
      const maxQuantity = item.maxQuantity;
      if (newQuantity >= 0 && newQuantity <= maxQuantity) {
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
.card-deck {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.card {
  background: #ededed;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;  
  border: 5px solid #2c6bb4;
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
.card-text {
  color: #555;
}
.quantity-selector span {
  display: inline-block;
  width: 40px;
  text-align: center;
}
</style>
