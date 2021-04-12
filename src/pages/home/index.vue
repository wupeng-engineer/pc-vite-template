<template>
  <h1>This is home</h1>
  <div>{{ name }}</div>
</template>

<script lang="ts">

import { computed, onMounted, watch } from 'vue';
import TestStore from '@/store/test';
import { useRequest } from '@/hooks/request';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {

    const { loading } = useRequest<string>('http://localhost:3000/app/hello', {
      query:{
        name:'123',
        age: 1,
        add: [1, 2]
      }
    });

    const name = computed(() => {
      return TestStore?.data?.name;
    });

    watch(loading, (newVal) => {
      console.log('newVal', newVal);
    });

    onMounted(() => {});

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
