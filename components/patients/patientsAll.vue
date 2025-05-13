<template>
  <v-container>
    <v-row align="center" justify="end">
      <div>
        <span class="title">
          Lab Appointments
        </span>
      </div>
      <v-spacer />
      <v-text-field
        label="Search"
        append-icon="mdi-magnify"
        single-line
        hide-details
        outlined
        class="mr-3"
      />
      <v-btn class="btnFilter">
        <span>
          Filter
        </span>
        <v-icon>
          mdi-filter-outline
        </v-icon>
      </v-btn>
      <v-btn class="btnPatient" @click="openDialog">
        <v-icon>
          mdi-plus
        </v-icon>
        <span>
          Add Patient
        </span>
      </v-btn>
    </v-row>
    <v-row align="center" justify="start">
      <v-data-table
        :headers="headers"
        :items="pacientes"
        :items-per-page="10"
        dense
        class="mt-4"
      >
        <template #[`item.photo`]="{ item }">
          <v-img
            :src="'data:image/jpeg;base64,' + item.photo"
            max-width="50"
            max-height="50"
            class="rounded-circle"
          />
        </template>
        <template #[`item.actions`]="{ item }">
          <v-icon small color="primary" title="Edit" @click="editPaciente(item)">
            mdi-pencil
          </v-icon>
          <v-icon small color="red" title="Delete" @click="deletePaciente(item)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-row>
    <v-dialog v-model="dialogAddPacient" persistent max-width="800px">
      <v-card color="indigo lighten-5" elevation="0">
        <v-card-title>
          Add Patient
          <v-spacer />
          <v-btn icon class="mr-2" color="gray darken-1" @click="dialogAddPacient = false">
            <v-icon>
              mdi-close
            </v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-tabs v-model="activeTab">
            <v-tab>Demographics</v-tab>
            <v-tab>Address</v-tab>
            <v-tab>Photo</v-tab>
          </v-tabs>

          <v-tabs-items v-model="activeTab">
            <!-- Demographics Tab -->
            <v-tab-item>
              <v-form style="margin: 10px !important;">
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="pacient.fullName"
                      label="Full Name"
                      required
                      outlined
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      v-model="pacient.email"
                      label="Email"
                      required
                      outlined
                    />
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      v-model="pacient.mobile"
                      label="Mobile"
                      required
                      outlined
                    />
                  </v-col>
                  <v-col cols="4">
                    <v-menu ref="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                      <template #activator="{on,attrs}">
                        <v-text-field
                          v-model="pacient.dateBirth"
                          label="Date of Birth"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        />
                      </template>
                      <v-date-picker
                        v-model="pacient.dateBirth"
                        @input="menu = false"
                      />
                    </v-menu>
                  </v-col>
                </v-row>
                <!-- Sexo y Estado Civil con Botones Cuadrados -->
                <v-row>
                  <v-col cols="6">
                    <v-btn-toggle v-model="pacient.sex" mandatory>
                      <v-btn value="male" outlined>
                        Male
                      </v-btn>
                      <v-btn value="female" outlined>
                        Female
                      </v-btn>
                      <v-btn value="other" outlined>
                        Other
                      </v-btn>
                    </v-btn-toggle>
                  </v-col>
                  <v-col cols="6">
                    <v-btn-toggle v-model="pacient.maritalStatus" mandatory>
                      <v-btn value="single" outlined>
                        Single
                      </v-btn>
                      <v-btn value="married" outlined>
                        Married
                      </v-btn>
                      <v-btn value="widowed" outlined>
                        Widowed
                      </v-btn>
                    </v-btn-toggle>
                  </v-col>
                </v-row>
              </v-form>
            </v-tab-item>

            <!-- Address Tab -->
            <v-tab-item>
              <v-form>
                <v-row style="margin: 10px !important;">
                  <v-col cols="12">
                    <v-text-field
                      v-model="pacient.address"
                      label="Address"
                      required
                      outlined
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      v-model="pacient.zipCode"
                      label="Zip Code"
                      required
                      outlined
                    />
                  </v-col>
                </v-row>

                <!-- Opción Extranjero -->
                <v-row>
                  <v-col cols="12">
                    <v-checkbox
                      v-model="pacient.international"
                      label="Is Foreign"
                      @change="handleForeignChange"
                    />
                  </v-col>
                </v-row>

                <!-- Campos de Dirección Condicionales -->
                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      v-model="pacient.state"
                      label="State"
                      outlined
                    />
                  </v-col>
                  <v-col cols="4">
                    <v-text-field
                      v-model="pacient.district"
                      label="District"
                      outlined
                    />
                  </v-col>
                </v-row>

                <!-- Cambiar país solo si es extranjero -->
                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      v-model="pacient.country"
                      label="Country"
                      :disabled="!pacient.international"
                      outlined
                      :value="pacient.international ? '' : 'Mexico'"
                    />
                  </v-col>
                </v-row>
              </v-form>
            </v-tab-item>

            <!-- Photo Tab -->
            <v-tab-item>
              <v-form style="margin: 10px !important;">
                <v-row>
                  <v-col cols="12">
                    <v-file-input
                      v-model="photoFile"
                      label="Upload Photo"
                      accept="image/*"
                      prepend-icon="mdi-camera"
                      outlined
                      @change="handleFileUpload"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="text-center">
                    <v-img
                      v-if="pacient.photo"
                      :src="'data:image/jpeg;base64,' + pacient.photo"
                      max-width="200"
                      max-height="200"
                      class="mt-2"
                    />
                  </v-col>
                </v-row>
              </v-form>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn class="btnPatient" @click="savePacient">
            <span>
              Add Patient
            </span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      pacientes: [],
      headers: [
        { text: 'Photo', value: 'photo', sortable: false },
        { text: 'Full Name', value: 'fullname' },
        { text: 'Email', value: 'email' },
        { text: 'Mobile', value: 'mobile' },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
      pacient: {
        fullName: '',
        email: '',
        mobile: '',
        dateBirth: '',
        motherTongue: '',
        govId: '',
        sex: '',
        maritalStatus: '',
        address: '',
        city: '',
        zipCode: '',
        state: '',
        country: 'Mexico',
        district: '',
        international: false,
        photo: ''
      },
      photoFile: null,
      activeTab: 0,
      dialogAddPacient: false,
      menu: false
    }
  },
  mounted () {
    this.loadPacientes()
  },
  methods: {
    openDialog () {
      this.dialogAddPacient = true
      this.activeTab = 0
    },
    handleFileUpload (event) {
      const file = event
      const reader = new FileReader()

      if (file.size > 500000) {
        this.$store.dispatch('alert/triggerAlert', {
          text: 'The uploaded image is too large. Please choose an image smaller than 500 KB.',
          type: 'error'
        })
        return
      }

      reader.onload = (e) => {
        this.pacient.photo = e.target.result.split(',')[1]
      }
      reader.readAsDataURL(file)
    },
    handleForeignChange () {
      if (!this.pacient.international) {
        this.pacient.country = 'Mexico'
        this.pacient.state = ''
        this.pacient.city = ''
      }
    },
    async savePacient () {
      try {
        if (this.pacient.id) {
          await this.$axios.put(`/pacientes/update/${this.pacient.id}`, this.pacient)
        } else {
          await this.$axios.post('/pacientes/create', this.pacient)
        }
        this.$store.dispatch('alert/triggerAlert', {
          message: 'Patient saved successfully',
          type: 'success'
        })
        this.dialogAddPacient = false
        this.loadPacientes()
      } catch (error) {
        const errorMessage = 'An error occurred while saving the patient.'
        this.$store.dispatch('alert/triggerAlert', {
          message: errorMessage,
          type: 'error'
        })
      }
    },
    async loadPacientes () {
      try {
        const response = await this.$axios.get('/pacientes')
        this.pacientes = response.data
      } catch (error) {
        this.$store.dispatch('alert/triggerAlert', {
          message: 'Error loading patients',
          type: 'error'
        })
      }
    },
    editPaciente (paciente) {
      this.pacient = { ...paciente }
      this.dialogAddPacient = true
    },
    async deletePaciente (paciente) {
      try {
        await this.$axios.delete(`/pacientes/delete/${paciente.id}`)
        this.$store.dispatch('alert/triggerAlert', {
          message: 'Patient deleted successfully',
          type: 'success'
        })
        this.loadPacientes()
      } catch (error) {
        this.$store.dispatch('alert/triggerAlert', {
          message: 'Error deleting patient',
          type: 'error'
        })
      }
    }
  }
}
</script>

<style scoped>
.title{
  font-size: 24px;
  font-weight: 500;
  color: #101828;
}

.btnFilter {
  background-color: white;
  color: #101828 !important;
  margin-right: 10px !important;
  border: 1px solid #101828 !important;
  border-radius: 5px !important;
  padding: 5px 10px !important;
  font-size: 14px !important;
  text-transform: none !important;
}

.btnPatient {
  text-transform: none !important;
  color: white;
  border-radius: 5px !important;
  padding: 5px 10px !important;
  background-color: #0e1680 !important;
  font-size: 14px !important;
  margin-right: 10px !important;
  font-weight: 500 !important;
}
</style>
