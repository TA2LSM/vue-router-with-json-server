<template>
  <!-- getting job details from db is an async operation. So wait until job is not NULL -->
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <!-- <p>The Job id is: {{ id }}</p> -->
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading job details...</p>
  </div>
</template>
  
<script>
export default {
  props: ['id'],  // accept these parameters as props from outside

  data() {
    return {
      job: null
    }
  },

  mounted() {
    const dbURL = "http://localhost:3001/jobs/";
    fetch(dbURL + this.id)
      .then(res => res.json())
      .then(data => this.job = data)
      .catch(err => console.log(err.message))
  }
}
</script>

<style>

</style>