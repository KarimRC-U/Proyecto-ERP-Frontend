<template>
  <div>
    <staff-list />
    <DefaultLayout />
  </div>
</template>

<script>
import DefaultLayout from '../layouts/defaultLayout.vue'
import StaffList from '~/components/staffList.vue'

export default {
  components: {
    StaffList,
    DefaultLayout
  }
}
</script>
