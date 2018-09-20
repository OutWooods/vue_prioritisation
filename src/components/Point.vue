<template>
  <div class="point ml-5 mt-5" @click="mark" :style="{backgroundColor: colour}">
  </div>
</template>

<script>
  export default {
    name: "Horizontal",

    data() {
      return {
        colour: 'white',
      }
    },

    methods: {
      mark() {
         this.colour = 'red';
      }
    }
  }
</script>

<style scoped>
  .point {
    height: 5px;
    width: 5px;
  }
</style>