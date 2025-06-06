<template>
  <v-container fluid>
    <v-card class="pa-6 rounded-xl elevation-2">
      <v-row class="justify-space-between align-center mb-6">
        <v-col cols="6">
          <h2 class="mb-1 font-weight-bold">New Staff</h2>
          <p class="text-caption">Create account for a new staff</p>
        </v-col>
        <v-col cols="6" class="d-flex justify-end align-center">
          <v-avatar size="50">
            <img :src="staffImage" alt="Staff Image" />
          </v-avatar>
          <div class="ml-2 text-caption">
            <p class="mb-1">{{ staffName }}</p>
            <p class="text-subtitle-2">{{ staffRole }}</p>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4" class="d-flex justify-center">
          <v-file-input
            label="Upload photo"
            accept="image/png, image/jpeg"
            prepend-icon="mdi-camera"
            outlined
            dense
            show-size
            :rules="[fileRules]"
            v-model="staffPhoto"
          ></v-file-input>
        </v-col>

        <v-col cols="12" md="8">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field label="First Name" v-model="form.nombre" outlined dense />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Last Name" v-model="form.apaterno" outlined dense />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Email Address" v-model="form.email" outlined dense />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Phone Number" v-model="form.telefono" outlined dense />
            </v-col>
            <v-col cols="12" md="6">
              <v-select :items="genderOptions" label="Gender" v-model="form.genero" outlined dense />
            </v-col>
            <v-col cols="12" md="6">
              <v-select :items="roles" label="Role" v-model="form.rol" outlined dense />
            </v-col>
            <v-col cols="12" md="6">
              <v-select :items="designations" label="Designation" v-model="form.designacion" outlined dense />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Staff ID" v-model="form.staffid" outlined dense />
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row justify="center" class="mt-6">
        <v-btn color="#14ADD6" class="rounded-lg font-weight-bold" @click="submitForm">
          Add Staff
        </v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'AddNewStaff',
  data () {
    return {
      staffImage: 'staff-placeholder.jpg',
      staffName: '',
      staffRole: '',
      staffPhoto: null,
      form: {
        nombre: '',
        apaterno: '',
        email: '',
        telefono: '',
        genero: '',
        rol: '',
        designacion: '',
        staffid: ''
      },
      roles: ['Admin', 'HR', 'I.T', 'Logistics'],
      designations: ['Manager', 'Officer', 'Assistant'],
      genderOptions: ['Male', 'Female', 'Other']
    }
  },
  methods: {
    fileRules (value) {
      if (!value) {
        return true
      }
      if (value.size > 2 * 1024 * 1024) {
        return 'File size should be less than 2MB'
      }
      return true
    },
    async submitForm () {
      try {
        const response = await this.$axios.post('/staffs', this.form)
        console.log('Form submitted successfully:', response.data)
      } catch (error) {
        console.error('Error submitting form:', error)
      }
    }
  },
  async mounted () {
    try {
      const response = await this.$axios.get('/staffs/latest')
      Object.assign(this.form, response.data.staff)
      this.staffName = response.data.staff.nombre
      this.staffRole = response.data.staff.rol
    } catch (error) {
      console.error('Error loading latest staff:', error)
    }
  }
}
</script>
