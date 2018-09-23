<template>
  <div class="point p-3" @click="mark" :style="{backgroundColor: colour}">
  </div>
</template>

<script>
  export default {
    name: "Horizontal",

    props: {
      colour: {
        required: true,
        type: String,
      }
    },

    methods: {
      mark() {
        this.colour = 'pink';
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