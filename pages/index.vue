<template>
  <DefaultLayout>
    <v-container>
      <StaffList />
    </v-container>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/defaultLayout.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import StaffList from '~/components/staffList'

export default {
  name: 'IndexPage',
  components: {
    DefaultLayout,
    StaffList
  }
}
</script>
