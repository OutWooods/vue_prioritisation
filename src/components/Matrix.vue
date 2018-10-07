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
};
</script>

<style scoped>
  #grid {
    width: 200px;
    height: 200px;
  }
</style>
