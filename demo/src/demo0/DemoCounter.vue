<template>
  <div>
    <button @click="dec">-</button>

    <span> Current value: {{ count }} </span>

    <button @click="inc">+</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

const inc = () => {
  count.value += 1;
};

const dec = () => {
  count.value -= 1;
};
</script>
