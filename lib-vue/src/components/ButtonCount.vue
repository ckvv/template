<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'ButtonCount',
});

const value = ref(0);

function add() {
  value.value++;
}
</script>

<template>
  <button @click="add">
    value: {{ value }}
  </button>
</template>
