<template>
  <DefaultLayout>
    <v-container>
      <StaffList />
    </v-container>
  </DefaultLayout>
</template>

<script>
import StaffList from '~/components/menuCrear/addStaff.vue'
import DefaultLayout from '@/layouts/defaultLayout.vue'
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  name: 'IndexPage',
  components: {
    DefaultLayout,
    StaffList
  }
}
</script>
