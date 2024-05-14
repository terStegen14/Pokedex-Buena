<template>
    <div>
      <h2>Inventari</h2>
      <Item v-for="(quantity, name) in inventory" :key="name" :name="name" :quantity="quantity"/>
    </div>
  </template>
  
  <script>
  import Item from './Item.vue';
  
  export default {
    components: {
      Item,
    },
    props: {
      inventory: Object,
    },
  };
  </script>
  
  <style scoped>
  /* Estils opcionals */
  </style>
  