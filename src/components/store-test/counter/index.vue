<template>
  <div>{{ counter.double }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCounterStore } from '@/stores/counter';

export default defineComponent({
  setup() {
    const counter = useCounterStore();
    counter.increment();
    counter.increment2();
    return {
      counter
    };

  }
});
</script>