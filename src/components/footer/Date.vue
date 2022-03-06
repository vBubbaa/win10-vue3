<template>
  <div id="datetime">
    <div>{{ time }}</div>
    <div>{{ dateStr }}</div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  setup() {
    // inital date obj to show before interval starts (30 seconds)
    const initDate = new Date();
    const time = ref(
      // eslint-disable-next-line comma-dangle
      `${initDate.getHours() % 12 || 12}:${initDate.getMinutes()}`,
    );
    const dateStr = ref(
      // eslint-disable-next-line comma-dangle
      `${
        initDate.getMonth() + 1
      }/${initDate.getDate()}/${initDate.getFullYear()}`,
    );

    // returns new time in H:M format
    function getTime() {
      const date = new Date();
      // conver to 12h format && add trailing 0 to minutes > 10
      time.value = ` ${date.getHours() % 12 || 12}:${
        (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
      }`;
    }

    onMounted(() => {
      // update the time every second
      setInterval(() => {
        getTime();
      }, 1000);
    });

    return {
      time,
      dateStr,
    };
  },
};
</script>

<style>
#datetime {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

#datetime div {
  display: flex;
  justify-content: center;
}
</style>
