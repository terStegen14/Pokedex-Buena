<template>
    <div>
      <h2>Botiga</h2>
      <div v-for="item in items" :key="item.name">
        <span>{{ item.name }}</span>
        <button @click="addToInventory(item.name, 1)">+</button>
        <button @click="addToInventory(item.name, -1)">-</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { name: 'pokeball' },
          { name: 'potion' },
          { name: 'elixir' },
        ],
      };
    },
    methods: {
      addToInventory(name, quantity) {
        this.$emit('addToInventory', { name, quantity });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estils*/
  </style>