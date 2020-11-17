<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hello WORLD!!!!!"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue' //connecting to hello World.vue

export default {
  name: 'App',
  components: {
    HelloWorld
  }
} //end of app
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
