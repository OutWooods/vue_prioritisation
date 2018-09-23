<template>
  <div id="app">
    <h1>hello</h1>
    <matrix></matrix>
    <button @click="getJobs">click me</button>
  </div>
</template>

<script>
  import axios from 'axios'
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
    methods: {
      getJobs() {
        axios.get('http://backend_prioritisation.test/api/jobs')
          .then((response) => {
            this.jobs = response.data.jobs;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
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
</style>
