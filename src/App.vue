<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-red fixed-top">
      <div class="container-fluid">
        <div class="collapse navbar-collapse d-flex justify-content-around" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <button id="navBtn" class="nav-link btn" @click="currentView = 'Pokedex'"><img src="./assets/pokemon.png" alt="Pokéx nav button" style="width: 2.5rem; margin-top: -8px;  margin-right: 5px;">Pokédex</button>
            </li>
          </ul>
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <button id="navBtn" class="nav-link btn" @click="currentView = 'Inventory'"><img src="./assets/pokebag.png" alt="Pokéx nav button" style="width: 2.5rem; margin-top: -8px;  margin-right: 5px;">Inventory&Store</button>
            </li>
          </ul>
          <!-- <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <button id="navBtn" class="nav-link btn" @click="currentView = 'Store'"><img src="./assets/pokeshop.png" alt="Pokéx nav button" style="width: 2.5rem; margin-top: -8px; margin-right: 5px;">Store</button>
            </li>
          </ul> -->
        </div>
      </div>
    </nav>
    <div id="app" class="container" style="margin-top: 60px;" >
      <img src="./assets/logo.png" alt="Pokemon logo" style="width: 50rem;">
      <h1 style="color: #ededed;">Kanto&Johto Pokédex</h1>
      <component :is="currentView" :inventory="inventoryData"></component>
    </div>
  </div>
</template>

<script>
import Pokedex from './components/Pokedex.vue';
import Inventory from './components/Inventory.vue';
// import Store from './components/Store.vue';

export default {
  name: 'App',
  components: {
    Pokedex,
    Inventory,
    // Store,
  },
  data() {
    return {
      currentView: 'Pokedex',
    };
  },
};
</script>

<style>
.navbar.bg-red {
  background-color: #ea3103;
}
#navBtn{
  color: #ededed;
  font-size: 1.5rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
