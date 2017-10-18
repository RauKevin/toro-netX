<template>
  <div>
    <img src="../assets/toro.jpg" alt="ToroNet" class="avatar" style="width:150px;height:150px;">
    <h2>Register</h2>

    <input 
      type="email" 
      name="email"
      v-model="email"
      placeholder="email" />
    <br>
    <input 
      type="password" 
      name="password"
      v-model="password"
      placeholder="password" />
    <br>
    <button
      @click.prevent="register">
      Register
    </button>
    <p>Enter Email and Password then press Register to Sign up!</p>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    async register()
    {
      //add server side validation here

      //sent post request
      /*
      this.$http.post('127.0.0.1:4000/api/register', {
        email: this.email,
        password: this.password
      }).then((data) => {
        console.log(data);
      });
      */
      console.log('pressed register button');
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
    }
    }

}
</script>

<style scoped>

</style>
