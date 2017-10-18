<template>
  <div>
    <h2>Welcome to Toro-Net!</h2>
    <h3> Sign up to get started </h3>
    <router-link to="/register"><button>Register</button></router-link>
    <br>
    <br>
    <img src="../assets/toro.jpg" alt="ToroNet" class="avatar" style="width:150px;height:150px;">
    <p>Already a member? Login in</p>
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
      @click="login">
      Log in
    </button>
    <p> status </p>
  </div>
</template>

<script>

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
   login: function()
   {
     console.log('Attempting log in' + Date.now);
     this.$http.post('http://localhost:4000/api/login',{
       email: this.email,
       password: this.password
     }).then(function(data){
       console.log(data);
     });
   }
  }
  
}
</script>

<style scoped>

</style>
