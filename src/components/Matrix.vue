<template>
  <div>
    <div class="flex-col bg-purple-dark pb-5 pr-5 ml-16" @click="getCoordinates" id="tester">
      <point v-for="coord in coordinates" :style='{ left: formatXCoord(coord.x), top: formatYCoord(coord.y)}'
             class="coord" :key="coord.index"></point>
    </div>
  </div>
</template>

<script>

  import Point from './Point.vue';

  export default {
    name: "matrix",

    components: {
      Point
    },

    data() {
      return {
        coordinates: [],
        loading: true,
        offset: {},
      }
    },

    mounted() {
      this.offset = document.getElementById('tester').getClientRects()[0];
      this.coordinates.push({ x: 10, y: 10, index: 999 });
      console.log(this.offset);
    },

    methods: {
      whatColour(a, b) {
        if (a <= this.rows / 2 && b > this.collumns / 2) {
          return 'red'
        }
        if (a > this.rows / 2 && b > this.collumns / 2) {
          return 'orange'
        }
        if (a <= this.rows / 2 && b <= this.collumns / 2) {
          return 'green'
        }
        return 'grey';
      },

      formatXCoord(x) {

        return `${((((x * 20)) + this.offset.x) - 5)}px`;
      },

      formatYCoord(x) {
        return `${(((200 - (x * 20)) + this.offset.y) - 5)}px`;
      },

      getCoordinates(event) {
        const offset = document.getElementById('tester').getClientRects();
        const x = ((event.clientX - offset[0].x) / 20);
        const y = (10 - ((event.clientY - offset[0].y) / 20))
        this.coordinates.push({ x: x, y: y, index: Math.random() });
      }
    }
  }
</script>

<style scoped>
  #tester {
    width: 210px;
    height: 210px;
  }

  .coord {
    position: absolute;
  }

</style>
