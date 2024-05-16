<template>
  <div class="slider-container">
    <p>Range: {{ min }} - {{ max }}</p>
    <div class="sliders">
      <input type="range" :min="1" :max="251" v-model="min" @input="handleMinInput">
      <input type="range" :min="1" :max="251" v-model="max" @input="handleMaxInput"> 
    </div>         
  </div>
</template>

<script>
export default {
  data() {
    return {
      min: 1,
      max: 251,
    };
  },
  methods: {
    handleMinInput(event) {
      const value = parseInt(event.target.value);
      if (value > this.max) {
        this.min = this.max;
      } else {
        this.min = value;
      }
      this.emitRangeChange();
    },
    handleMaxInput(event) {
      const value = parseInt(event.target.value);
      if (value < this.min) {
        this.max = this.min;
      } else {
        this.max = value;
      }
      this.emitRangeChange();
    },
    emitRangeChange() {
      this.$emit('changeRange', [this.min, this.max]);
    }
  },
};
</script>

<style scoped>
.slider-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sliders{
  display: flex;
  flex-direction: column;
  max-width: 10rem;
  flex-wrap: wrap;
  align-items: center;
}
</style>
