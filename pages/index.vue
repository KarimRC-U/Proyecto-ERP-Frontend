<template>
  <v-container>
    <login-user />
  </v-container>
</template>

<script>
// import loginUser from '~/components/auth/loginUser.vue'
import loginUser from '~/layouts/principal'
export default {
  name: 'IndexPage',
  components: {
    loginUser
  }
}
</script>
