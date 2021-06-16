<template>
  <h1 class="text-blue-400 text-2xl">
    This is home
  </h1>
  <counter-store-test />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CounterStoreTest from '@/components/store-test/counter/index.vue';
export default defineComponent({
  components: {
    CounterStoreTest
  },
  setup() {

  },
});
</script>