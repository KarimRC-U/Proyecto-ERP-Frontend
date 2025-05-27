<template>
  <v-container>
    <login-user />
  </v-container>
</template>

<script>
// import loginUser from '~/components/auth/loginUser.vue'
import loginUser from '~/components/patients/patientsAll'
export default {
  name: 'IndexPage',
  components: {
    loginUser
  }
}
</script>
