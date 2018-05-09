<template>
  <div id='app' v-if='status === "Ready"'>
    <Header :title='title'/>
    <MoviesList/>
    <div v-if='status === "Loading"'>
      Loading
    </div>
    <div v-else>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import MoviesList from './components/MoviesList.vue';
import Movie from './components/Movie.vue';

export default {
  name: 'app',
  data() {
    return {
      hello: 'HelloWorld',
      title: 'Vue Movie DB',
      // isTrue: true,
      status: 'Ready'
    }
  },
  components: {
    MoviesList,
    Header,
    Movie
  },
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
  }
</style>
