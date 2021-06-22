<template>
  <h1 class="text-2xl text-blue-400">
    This is home
  </h1>
 
  <counter-store-test />

  <router-view />
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