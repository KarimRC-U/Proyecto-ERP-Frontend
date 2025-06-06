<template>
  <add-staff />
</template>

<script>
import AddStaff from '@/components/menuCrear/addStaff.vue'

export default {
  components: {
    AddStaff
  },
  layout: 'principal',
  middleware: 'auth'
}
</script>

<style scoped>
</style>
