<template>
    <div>
        <button class="btn" @click="currentView = 'Pokedex'">All</button>
        <button class="btn" @click="currentView = 'Favorite'">All</button>
        <button class="btn" @click="currentView = 'Team'">All</button>
    </div>
    <div>
        <component :is="currentView"></component>
    </div>
</template>
<script>
import Pokedex from './Pokedex.vue';

export default {
    components: {        
        Pokedex,
    },
    data() {
        return {
        currentView: 'Pokedex',
        };
    },
    methods: {
        
    },
}
</script>
<style lang="">
    
</style>