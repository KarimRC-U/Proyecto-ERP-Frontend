<template>
  <DefaultLayout>
    <v-container>
      <StaffList />
    </v-container>
  </DefaultLayout>
</template>

<script>
<<<<<<< HEAD
import DefaultLayout from '@/layouts/defaultLayout.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import StaffList from '~/components/staffList'

=======
// import loginUser from '~/components/auth/loginUser.vue'
import loginUser from '~/components/Staffs/StaffsAll'
>>>>>>> parent of df9e491 (Revert "Obtener staffs del back")
export default {
  name: 'IndexPage',
  components: {
    DefaultLayout,
    StaffList
  }
}
</script>
