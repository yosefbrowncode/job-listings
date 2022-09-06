<script setup>
import Navbar from './components/Navbar.vue'
import Card from './components/Card.vue'
import SearchBox from './components/SearchBox.vue'

</script>


<template>

  <Navbar />
  <search-box/>
  <card/>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: hsl(180, 52%, 96%);
  height: 100vh;
 
}
</style>
