<template>
  <div
    class="folder-wrapper"
    :class="{ maximized: expandedView }"
    :id="uid"
    ref="folder"
  >
    <div class="header" @dblclick="changeWindowSize">
      <div class="left">
        <div>{{ props.title }}</div>
      </div>
      <div class="right">
        <Button icon="window-minimize" type="primary" />
        <Button icon="maximize" @click="changeWindowSize" type="primary" />
        <Button icon="x" type="danger" />
      </div>
    </div>
  </div>

  <Moveable
    className="moveable"
    v-bind:target="[uidHash]"
    v-bind:draggable="!expandedView"
    @drag="onDrag"
  />
</template>

<script>
import Moveable from 'vue3-moveable';
import { onMounted, ref } from 'vue';
import uniqueID from 'lodash.uniqueid';
import Button from '../ui/Button.vue';

export default {
  name: 'Window',
  components: {
    Moveable,
    Button,
  },
  props: {
    title: String,
  },
  setup(props) {
    // fullscreen?
    const expandedView = ref(false);
    // folder div reference
    const folder = ref('folder');
    // unique ID used to identify component instance
    const uid = ref(null);
    // uid with # for moveable identifier
    const uidHash = ref(null);

    // variable used ot save the folder location before it maximizes to full-screen
    let folderLocationPreExpand = '';

    // Handle window drag
    const onDrag = (e) => {
      e.target.style.transform = e.transform;
    };

    // Handle window size change
    const changeWindowSize = () => {
      expandedView.value = !expandedView.value;
      if (expandedView.value === true) {
        // save location of folder pre-expand
        folderLocationPreExpand = folder.value.style.transform;
        // clear inline styles applied by moveable to force it to top:0 left: 0
        folder.value.style = '';
      } else {
        // its going back to small view, so send it back to the location pre-maxmize
        folder.value.style.transform = folderLocationPreExpand;
      }
    };

    onMounted(() => {
      uid.value = `folder-${uniqueID()}`;
      // id value with leading # to tell moveable its looking for the ID uid.value
      uidHash.value = `#${uid.value}`;
    });

    return {
      onDrag,
      props,
      expandedView,
      changeWindowSize,
      folder,
      folderLocationPreExpand,
      uid,
      uidHash,
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

.header {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e5e5e5;
}

/* left side of header */
.left {
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  padding-left: 10px;
}

/* right side of header */
.right {
  display: flex;
  flex-direction: row;
}

.maximized {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
