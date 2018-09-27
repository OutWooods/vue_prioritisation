<template>
  <div id="app">
    <h1>hello</h1>
    <div class="flex">
      <div class="ml-16 p-5 parent">
        <matrix></matrix>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
  import './assets/css/main.css'
  import Matrix from './components/Matrix.vue'

  export default {
    name: 'app',
    components: {
      Matrix,
    },
    data() {
      return {
        jobs: [],
      }
    },
    created() {
    },
    methods: {}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .parent{
    height: 230px;
    width: 230px;
  }
</style>
