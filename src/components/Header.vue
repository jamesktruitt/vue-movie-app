<template>
  <header>
    <h1><router-link to='/'> {{ title }} </router-link></h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  },
  data() {
    return {
      name: ''
    }
  },
};
</script>

<style scoped>
header {
  background-color: #111;
  padding: 40px;
}

h1 {
  margin: 0;
}

a:link {
  text-decoration: none;
  font-weight: bold;
  color: white;
  margin: 0
}

a:hover   {
  text-decoration: none;
  font-weight: bold;
  color: blue;
  margin: 0
}
</style>