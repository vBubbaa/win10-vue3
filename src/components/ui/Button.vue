<template>
  <div class="button" :class="props.type">
    <font-awesome-icon :icon="props.icon" />
  </div>
</template>

<script>
/**
 * Simple Button component
 * @props
 * type: ['danger' or 'primary' accepted]
 * icon: font-awesome icon to display in button
 */
export default {
  name: 'Button',
  props: {
    type: String,
    icon: String,
  },
  setup(props) {
    return { props };
  },
};
</script>

<style>
.button {
  background-color: transparent;
  padding: 10px;
  display: flex;
  align-items: center;
  color: black;
}

.primary:hover {
  background-color: #e5e5e5;
}

.danger:hover {
  background-color: #e81123;
  color: white;
}
</style>
