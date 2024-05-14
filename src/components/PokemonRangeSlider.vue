<template>
    <div>
      <input type="range" min="1" max="151" v-model="min" @input="updateRange">
      <input type="range" min="1" max="151" v-model="max" @input="updateRange">
      <p>Rang: {{ min }} - {{ max }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        min: 1,
        max: 151,
      };
    },
    methods: {
      updateRange() {
        this.$emit('changeRange', [this.min, this.max]);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estils opcionals */
  </style>
  