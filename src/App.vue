<template>
  <main>main</main>
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: { Footer },
};
</script>

<style>
/* roboto font */
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

/* Default resets */
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

/* full-height view - 50px for the footer size - 10px for the padding */
main {
  min-height: calc(100vh - 60px);
  padding: 0 10px;
  padding-top: 10px;
  background-image: url('./assets/win10-background.jpg');
  background-size: cover;
}
</style>
