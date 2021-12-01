<template>
  <div class="container">
    <h1>{{url}}</h1>
    <p>{{titles}}</p>
    <span></span>
  </div>
</template>

<script>
  export default {
    async asyncData({$axios, $origin}) {
      const titles = await $axios.$get(`${$origin()}/api`)
      const url = $origin()
      return { titles, url }
    },
  }
</script>

<style scoped>
  .container {
    font-size: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 500px;
    width: 100%;
    background:lightgray;
  }
</style>