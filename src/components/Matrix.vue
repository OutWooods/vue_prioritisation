<template>
  <div>
    <div class="parent bg-purple-dark">
      <div id="tester"
           class="bg-purple-dark"
           @click="getCoordinates"
      >
        <point class="coord"
               :key="coord.id"
               v-for="coord in coordinates"
               :style='{ left: formatXCoord(coord.x), top: formatYCoord(coord.y)}'
        ></point>
      </div>
    </div>
  </div>
</template>

<script>

  import axios from 'axios'
  import Point from './Point.vue';

  export default {
    name: "matrix",

    components: {
      Point
    },

    data() {
      return {
        jobs: {},
        coordinates: [],
        loading: true,
        offset: {},
      }
    },

    mounted() {
      this.offset = document.getElementById('tester').getClientRects()[0];
      axios.get('http://backend_prioritisation.test/api/jobs')
        .then((response) => {
          this.coordinates = response.data.jobs;
        })
    },

    methods: {
      formatXCoord(x) {
        return `${((((x * 20)) + this.offset.x) - 5)}px`;
      },

      formatYCoord(x) {
        return `${(((200 - (x * 20)) + this.offset.y) - 5)}px`;
      },

      getCoordinates(event) {
        const x = ((event.clientX - this.offset.x) / 20);
        const y = (10 - ((event.clientY - this.offset.y) / 20))
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

  .parent {
    width: 220px;
    height: 220px;
    padding-top: 5px;
    padding-left: 5px;
  }

  .coord {
    position: absolute;
  }

</style>
