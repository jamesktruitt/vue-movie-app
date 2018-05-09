<template>
  <img :src='movie.posterPath' />
</template>

<script>
  export default {
    props: ['movie']
  }
</script>

<style scoped>

</style>