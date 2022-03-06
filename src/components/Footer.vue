<template>
  <footer id="footer">
    <div class="flex-row start">
      <div class="footer-item" @click="dispatchShowFooterNav">
        <font-awesome-icon id="windows-icon" :icon="['fab', 'windows']" />
      </div>
    </div>
    <div class="flex-row end">
      <div class="footer-item"><Date /></div>
    </div>
  </footer>
</template>

<script>
import Date from './footer/Date.vue';
import store from '../store';

export default {
  name: 'Footer',
  components: {
    Date,
  },
  setup() {
    function dispatchShowFooterNav() {
      store.commit('setShowFooterNav');
    }

    return {
      dispatchShowFooterNav,
    };
  },
};
</script>

<style>
#footer {
  background-color: #223641;
  height: 50px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

#footer * {
  color: white;
}

.footer-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 10px;
  min-width: 25px;
}

.flex-row {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.start {
  flex: 1 1 auto;
}

.end {
  flex: 0 0 auto;
}

.footer-item:hover {
  background-color: #394c55;
}
</style>
