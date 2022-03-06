<template>
  {{ time }}
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  setup() {
    // inital date obj to show before interval starts (30 seconds)
    const initDate = new Date();
    const time = ref(
      // eslint-disable-next-line comma-dangle
      `${initDate.getHours() % 12 || 12}:${initDate.getMinutes()}`
    );

    // returns new time in H:M format
    function getTime() {
      const date = new Date();
      time.value = ` ${date.getHours() % 12 || 12}:${date.getMinutes()}`;
    }

    onMounted(() => {
      // update the time every second
      setInterval(() => {
        getTime();
      }, 1000);
    });

    return {
      time,
    };
  },
};
</script>

<style>
</style>
