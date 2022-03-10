<template>
  <main>
    <div>main</div>
    <window-wrapper>
      <Window title="Test Folder 123" />
      <Window title="Test Folder" />
    </window-wrapper>
  </main>
  <windows-menu />
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue';
import WindowsMenu from './components/footer/WindowsMenu.vue';
import Window from './components/window/Window.vue';
import WindowWrapper from './components/window/WindowWrapper.vue';

export default {
  name: 'App',
  components: {
    Footer,
    WindowsMenu,
    Window,
    WindowWrapper,
  },
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
