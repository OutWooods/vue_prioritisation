<template>
  <div>
    <div class="flex-col pb-5 pr-5 ml-16">
      <div class="flex" v-for="row in rows" :key="row">
        <point v-for="col in collumns" :key="col" :colour="whatColour(row, col)"></point>
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
        collumns: 10,
        rows: 10,
      }
    },

    methods: {
      whatColour(a, b) {
        if(a <= this.rows/2 && b > this.collumns/2) { return 'red' }
        if(a > this.rows/2 && b > this.collumns/2) { return 'orange' }
        if(a <= this.rows/2 && b <= this.collumns/2) { return 'green' }
        return 'grey';
      }
    }
  }
</script>

<style scoped>
</style>