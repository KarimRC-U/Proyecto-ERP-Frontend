<template>
  <div class="bg-white p-4 rounded shadow">
    <div class="text-gray-500 text-sm">{{ title }}</div>
    <div class="text-2xl font-bold mt-1">{{ value }}</div>
    <div v-if="trend" class="text-green-500 text-sm mt-1">{{ trend }}</div>
  </div>
</template>

<script>
export default {
  props: ['title', 'value', 'trend']
}
</script>
