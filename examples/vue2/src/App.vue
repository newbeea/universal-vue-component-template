<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Universal />
  </div>
</template>

<script>
import Universal from 'universal-vue-template'
import 'universal-vue-template/dist/style.css'
export default {
  name: 'App',
  components: {
    Universal,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
