<template>
  <div>
    <h1> Welcome to the login page!</h1>
    <div>
      <label for="email">Email:</label>
      <input id="email"
             type="email"
             name="username"
             v-model="details.username">
    </div>
    <div>
      <label for="password">Password:</label>
      <input id="password"
             type="password"
             name="password"
             v-model="details.password">

    </div>
    <button @click="login"
            type="button"
            class="bg-green hover:green-dark">
      Login
    </button>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'login',

  data() {
    return {
      details: {
        username: '',
        password: '',
      },
    };
  },

  methods: {
    login() {
      axios.post('yourbackend.com', this.details)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
