<!-- 
 * install json-server: npm i json-server
 * create "db.json" under "data" folder
 * watch db.json: json-server --watch data/db.json OR ADD following command to package.json -> scripts
    "db:serve": "json-server --watch data/db.json --port=3001",
-->

<template>
  <nav>
    <!-- Because of router links vue will intercept requests and process
         them faster by itself. There will be no requests to the server. -->
    <router-link to="/">Home</router-link> |
    <router-link :to="{name: 'Jobs'}">Jobs</router-link> |

    <!-- hard coded -->
    <!-- <router-link to="/about">About</router-link> -->
    <!-- dynamically added. Refers the names of the routes in the router/index.js -->
    <router-link :to="{name: 'About'}">About</router-link>
  </nav>

  <button @click="redirect">Redirect User</button>
  <button @click="back">Go Back</button>
  <button @click="forward">Go Forward</button>

  <!-- Every component that requested will be rendered in here below -->
  <router-view/>
</template>

<script>
  export default {
    methods: {
      redirect() {
        this.$router.push({ name: 'Home'})
      },
      back() {
        this.$router.go(-1);
      },
      forward() {
        this.$router.go(1);
      },
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  /* color: #42b983; */
  color: white;
  background: crimson;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
