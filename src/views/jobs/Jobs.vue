<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{name: 'JobDetails', params: { id: job.id }}">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
<div v-else>
  <p>Loading jobs...</p>
</div>
</template>

<script>
// import someFunction from './calculate/price'
// 
// export default {
  //--- Composition API ------------------------
  // setup() {
    // data
    // methods
    // computed
    // lifecycle hooks
    // const data = someFunction()
  // }
  //--------------------------------------------
// }

// OR

export default {
  //--- Options API ----------------------------
  data() {
    return {
      jobs: []
    }
  },
  
  // methods { foo() {} },
  // computed { foo() {} },

  //--- Lifecycle Hooks
  mounted() {
    const dbURL = "http://localhost:3001/jobs";
    fetch(dbURL)
    .then(res => res.json())
    .then(data => this.jobs = data)
    .catch(err => console.log(err.message))
  }
  //--------------------------------------------
}
</script>

<style>
  .job h2 {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }
  .job h2:hover {
    background: #ddd;
  }
  .job a {
    text-decoration: none;
  }
</style>