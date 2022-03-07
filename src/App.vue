<template>
  <main>
    <div>main</div>
    <Window title="Test Folder" />
  </main>
  <windows-menu />
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue';
import WindowsMenu from './components/footer/WindowsMenu.vue';
import Window from './components/window/Window.vue';

export default {
  name: 'App',
  components: { Footer, WindowsMenu, Window },
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
  overflow: hidden;
}

/* full-height view - 50px for the footer size - 10px for the padding */
main {
  min-height: calc(100vh - 60px);
  padding: 0 10px;
  padding-top: 10px;
  background-image: url('./assets/win10-background.jpg');
  background-size: cover;
}

#app {
  display: flex;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}
</style>
