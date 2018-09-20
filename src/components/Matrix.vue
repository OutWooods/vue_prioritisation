<template>
  <div>
    <div class="container flex-col bg-blue-dark ">
      <div class="text-white ml-10 flex" v-for="row in rows" :key="row">
        <point v-for="col in collumns" :key="col"></point>
      </div>
    </div>
  </div>
</template>

<script>
  import Point from "./Point.vue";

  export default {
    name: "matrix",

    components: { Point },

    data() {
      return {
        collumns: 8,
        rows: 8
      }
    },
  }
</script>

<style scoped>
  .container {
    width: 500px;
    height: 600px;
  }
</style>