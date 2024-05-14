<template>
    <div class="item">
      <span>{{ name }}: {{ quantity }}</span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      quantity: Number,
    },
  };
  </script>
  
  <style scoped>
  .item {
    margin: 5px 0;
  }
  </style>
  