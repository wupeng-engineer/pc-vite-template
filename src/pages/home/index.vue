<template>
  <h1>This is home</h1>
  <div>{{ name }}</div>
</template>

<script lang="ts">

import { computed } from 'vue';
import TestStore from '@/store/test';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {

    const name = computed(() => {
      return TestStore?.data?.name;
    });

    return {
      name
    };
  },
};
</script>

<style lang="less" scoped>
h1 {
  color: red;
}

button {
  height: 24px;
}
</style>
