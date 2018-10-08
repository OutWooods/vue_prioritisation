<template>
  <div>
    <h1> Welcome to the login page!</h1>
    <p  class="text-red"
        v-show="errors.backend"
        v-text="errors.backend"
    >
      </p>
    <div>
      <label for="username">Email:</label>
      <input id="username"
             type="email"
             name="username"
             v-model="details.username">
      <span class="text-red"
            v-show="errors.username"
            v-text="errors.username"
      >
      </span>
    </div>
    <div>
      <label for="password">Password:</label>
      <input id="password"
             type="password"
             name="password"
             v-model="details.password">
      <span class="text-red"
            v-show="errors.password"
            v-text="errors.password"
      >
      </span>

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
      errors: {},
    };
  },

  methods: {
    login() {
      this.loginValidation();
      if (Object.keys(this.errors).length === 0 && this.errors.constructor === Object) {
        axios.post(`${process.env.ROOT_API}/login`, this.details)
          .then((response) => {
          })
          .catch((error) => {
            this.errors = { backend: error.response.data };
          });
      }
    },

    loginValidation() {
      const validation = {};
      if (this.details.username.search('@') === -1) {
        console.log('hey!');
        validation.username = 'You must have a valid email';
      }
      if (this.details.username === '') {
        validation.username = 'You cannot have a blank username';
      }
      if (this.details.password === '') {
        validation.password = 'You cannot have a blank password';
      }
      this.errors = validation;
    },
  },
};
</script>
