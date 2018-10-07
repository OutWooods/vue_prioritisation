<template>
  <div>
    <div class="flex">
      <div class="parent bg-purple-dark">
        <div id="grid"
             class="bg-purple-dark"
             @click="newJob"
        >
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'matrix',

  data() {
    return {
      loading: true,
      offset: {},

      jobs: [],
      showJob: {},
    };
  },

  mounted() {
    this.offset = document.getElementById('grid').getClientRects()[0];
  },

  computed: {
    doViewJob() {
      return Object.keys(this.showJob).length !== 0 && this.showJob.constructor === Object;
    },
  },

  methods: {
    formatXCoord(x) {
      const coord = x * 20 + this.offset.x - 5;
      return `${coord}px`;
    },

    formatYCoord(x) {
      const coord = 200 - x * 20 + this.offset.y - 5;
      return `${coord}px`;
    },

    viewJob(job) {
      this.showJob = job;
    },

    closeJob() {
      this.showJob = {};
    },

    newJob(event) {
      const x = ((event.clientX - this.offset.x) / 20);
      const y = (10 - ((event.clientY - this.offset.y) / 20));
      this.jobs.push({
        x: x,
        y: y,
        index: Math.random(),
        id: this.jobs[this.jobs.length - 1].id + 1,
      });
    },
  },
};
</script>

<style scoped>
  #grid {
    width: 200px;
    height: 200px;
  }
</style>