<template>
  <div class="point p-3" @click="toggleMarked" :style="{backgroundColor: bgColour}">
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

    data() {
      return {
        clicked: false
      }
    },

    computed: {
      bgColour() {
         return  this.clicked ? 'pink' : this.colour;
      }
    },

    methods: {
      toggleMarked() {
        this.clicked = !this.clicked;
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