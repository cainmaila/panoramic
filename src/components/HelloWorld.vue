<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style lang="postcss" scoped>
a {
  color: #42b983;
}
</style>
