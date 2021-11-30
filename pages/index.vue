<template>
  <div class="container">
    {{name}}
  </div>
</template>

<script>
  export default {
    
    computed: {
      async name() {
        await this.$axios.get('http://localhost/api/content/name')
          .then(res=> {
            return res.data
          })
      },
      async age() {
        await this.$axios.get('http://localhost/api/content/age')
          .then(res=> {
            return res.data
          })
      }
    },
    mounted() {
      console.log(name)
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