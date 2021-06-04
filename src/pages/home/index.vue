<template>
  <h1 class="text-red-500 text-2xl text-yellow-50">This is home</h1>
  <div>{{ name }}</div>
</template>

<script lang="ts">

import { computed, defineComponent, onMounted, watch } from 'vue';

export default defineComponent({
  setup() {

    // const { loading } = useRequest<string>('http://localhost:3000/app/hello', {
    //   query:{
    //     name:'123',
    //     age: 1,
    //     add: [1, 2]
    //   }
    // });

    // const name = computed(() => {
    //   return TestStore?.data?.name;
    // });

    // watch(loading, (newVal) => {
    //   console.log('newVal', newVal);
    // });

    // onMounted(() => {});

    return {
      name
    };
  },
});
</script>

<style lang="less" scoped>
</style>
