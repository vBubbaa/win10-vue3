<template>
  <div
    id="windowsmenu-wrapper"
    v-if="store.getters.getShowFooterNav"
    v-click-outside="onClickOutside"
  >
    <div class="windowsmenu-row icon-row">
      <div>
        <font-awesome-icon id="windows-icon" :icon="['fas', 'image']" />
      </div>
      <div>
        <font-awesome-icon id="windows-icon" :icon="['fas', 'gear']" />
      </div>
      <div>
        <font-awesome-icon id="windows-icon" :icon="['fas', 'power-off']" />
      </div>
    </div>
    <div class="windowsmenu-row quick-navigation">
      <div>Link Link</div>
      <div>Link Link</div>
      <div>Link Link</div>
      <div>Link Link</div>
      <div>Link Link</div>
      <div>Link Link</div>
      <div>Link Link</div>
      <div>Link Link</div>
      <div>Link Link</div>
      <div>Link Link</div>
      <div>Link Link</div>
      <div>Link Link</div>
      <div>Link Link</div>
      <div>Link Link</div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'click-outside-vue3';
import store from '../../store';

export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  name: 'WindowsMenu',
  setup() {
    function onClickOutside() {
      store.commit('setShowFooterNav');
    }
    return {
      store,
      onClickOutside,
    };
  },
};
</script>

<style>
#windowsmenu-wrapper {
  position: absolute;
  /* Positioned just above the bottom footer */
  bottom: 50px;
  background-color: #293c47;
  color: white;
  display: flex;
  flex-direction: row;
  height: 500px;
}

.icon-row {
  align-self: end;
}

.quick-navigation {
  display: flex;
  flex-direction: column;
  height: 500px;
  overflow: scroll;
  overflow-x: hidden;
}

.quick-navigation div {
  justify-content: flex-start;
  display: flex;
  height: 50px;
}

/* width */
.quick-navigation::-webkit-scrollbar {
  width: 2px;
}

/* Track */
.quick-navigation::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
.quick-navigation::-webkit-scrollbar-thumb {
  background: white;
}

/* Handle on hover */
.quick-navigation::-webkit-scrollbar-thumb:hover {
  background: white;
}

.windowsmenu-row div {
  padding: 20px;
}

.windowsmenu-row div:hover {
  background-color: #384853;
}
</style>
