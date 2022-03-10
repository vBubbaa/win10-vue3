<template>
  <div class="invisible-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WindowWrapper',
};
</script>

<style>
/* invisible wrapper that is 100% of main */
.invisible-wrapper {
  width: 100vw;
  position: absolute;
  height: calc(100vh - 50px);
  top: 0;
  left: 0;
}
</style>
