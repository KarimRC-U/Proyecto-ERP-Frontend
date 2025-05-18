<template>
  <v-container
    class="d-flex justify-center align-center fill-height"
    fluid
  >
    <v-row>
      <v-col cols="12" md="6" class="d-flex flex-column justify-center px-10">
        <div class="mb-10">
          <h1 class="font-weight-bold">Please Sign In</h1>
          <p>Welcome back!!</p>
        </div>

        <v-form v-model="valid" @submit.prevent="submitForm" lazy-validation>
          <v-text-field
            label="Email address"
            v-model="email"
            :rules="emailRules"
            outlined
            dense
            required
          />
          <v-text-field
            label="Password"
            v-model="password"
            :rules="passwordRules"
            :type="showPassword ? 'text' : 'password'"
            outlined
            dense
            required
            append-icon="mdi-eye"
            @click:append="showPassword = !showPassword"
          />
          <v-checkbox
            v-model="rememberMe"
            label="Remember me"
          />
          <v-btn
            :disabled="!valid"
            color="primary"
            type="submit"
            class="my-4"
            block
          >
            Sign In
          </v-btn>

          <!-- ✅ Botón corregido para ir a /auth/fpassword -->
          <v-btn
            text
            color="primary"
            @click="$router.push('/auth/fpassword')"
          >
            I forgot my password
          </v-btn>
        </v-form>
      </v-col>

      <v-col cols="12" md="6" class="pa-0">
        <v-img
          src="/images/login-background.jpg"
          height="100%"
          contain
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      showPassword: false,
      valid: false,
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
      ],
    }
  },
  methods: {
    submitForm() {
      alert(`Email: ${this.email}, Password: ${this.password}`);
    }
  }
}
</script>

<style scoped>
.v-container {
  height: 100vh;
}
</style>
