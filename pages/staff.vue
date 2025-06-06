<template>
  <div>
    <staffs-all />
    <DefaultLayout />
  </div>
</template>

<script>
import DefaultLayout from '../layouts/defaultLayout.vue'
import StaffsAll from '../components/staffs/StaffsAll.vue'

export default {
  components: {
    StaffsAll,
    DefaultLayout
  }
}
</script>
