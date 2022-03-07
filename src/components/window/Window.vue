<template>
  <div class="invisible-wrapper">
    <div
      class="folder-wrapper"
      :class="{ maximized: expandedView }"
      ref="folder"
    >
      <div class="header">
        <div class="left">
          <div>{{ props.title }}</div>
          <!-- TODO: change this to @dblclick on header bar -->
          <button @click="changeWindowSize">expand</button>
        </div>
        <div class="right">- O X</div>
      </div>
    </div>
  </div>
  <Moveable
    className="moveable"
    v-bind:target="['.folder-wrapper']"
    v-bind:draggable="!expandedView"
    @drag="onDrag"
  />
</template>

<script>
import Moveable from 'vue3-moveable';
import { ref } from 'vue';

export default {
  name: 'Window',
  components: {
    Moveable,
  },
  props: {
    title: String,
  },
  setup(props) {
    // fullscreen?
    const expandedView = ref(false);
    // folder div reference
    const folder = ref('folder');

    // Handle window drag
    const onDrag = (e) => {
      e.target.style.transform = e.transform;
    };

    // Handle window size change
    const changeWindowSize = () => {
      expandedView.value = !expandedView.value;
      if (expandedView.value === true) {
        // clear inline styles applied by moveable to force it to top:0 left: 0
        folder.value.style = '';
      }
    };

    return {
      onDrag,
      props,
      expandedView,
      changeWindowSize,
      folder,
    };
  },
};
</script>

<style>
/* Remove moveable library default centerpoint dot */
.moveable-control.moveable-origin {
  display: none;
}

/* remove moveable default blue outline */
.moveable {
  --moveable-color: transparent !important;
}

.folder-wrapper {
  position: relative;
  height: 500px;
  width: 500px;
  background-color: white;
}

/* invisible wrapper that is 100% of main */
.invisible-wrapper {
  width: 100vw;
  position: absolute;
  height: calc(100vh - 50px);
  top: 0;
  left: 0;
}

.header {
  display: flex;
  flex-direction: row;
  padding: 10px;
}

/* left side of header */
.left {
  flex: 1 0 auto;
}

/* right side of header */
.end {
  flex: 0 0 auto;
}

.maximized {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
