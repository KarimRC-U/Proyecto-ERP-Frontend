<template>
  <Staffs-all />
</template>

<script>
import StaffsAll from '@/components/Staffs/StaffsAll.vue'
export default {
  components: {
    StaffsAll
  },
  layout: 'principal',
  middleware: 'auth'
}
</script>

<style scoped>
</style>
