<template>
  <DefaultLayout>
    <v-container>
      <StaffList />
    </v-container>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '../layouts/defaultLayout.vue'
import StaffList from '../components/staffList.vue'

export default {
  name: 'IndexPage',
  components: {
    DefaultLayout,
    StaffList
  }
}
</script>
