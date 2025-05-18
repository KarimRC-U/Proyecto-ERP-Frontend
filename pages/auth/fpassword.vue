<template>
  <v-container fluid class="pa-0 fill-height">
    <v-row no-gutters>
      <!-- Sección izquierda -->
      <v-col cols="12" md="6" class="pa-12 d-flex flex-column justify-space-between">
        <div>
          <v-img src="/logo.png" max-width="150" contain class="mb-8" />

          <div class="mb-4 text-caption font-weight-medium">Password recovery.</div>
          <h1 class="font-weight-bold mb-2">Forgot your password?</h1>
          <p class="mb-8">
            Kindly enter the email address linked to this account and we will send you a code to enable you change your password.
          </p>

          <v-form @submit.prevent="submitEmail">
            <v-text-field
              v-model="email"
              label="Email address"
              outlined
              rounded
              dense
              placeholder="Enter email address"
              class="mb-6"
            />
            <v-btn block height="48" class="white--text gradient-btn" type="submit">
              Send
            </v-btn>
          </v-form>
        </div>

        <div class="mt-8">
          <nuxt-link to="/" class="text-primary">Back to login</nuxt-link>
        </div>
      </v-col>

      <!-- Sección derecha con imagen -->
      <v-col cols="12" md="6">
        <v-img
          src="/images/recovery.png"
          height="100%"
          cover
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    submitEmail() {
      // lógica backend aun por probar
      alert(`Sending recovery to ${this.email}`);
    },
  },
};
</script>

<style scoped>
.gradient-btn {
  background: linear-gradient(to right, #00c6ff, #0072ff);
  border-radius: 12px;
}
</style>
