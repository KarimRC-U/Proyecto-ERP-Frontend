<template>
  <v-container fluid>
    <v-card class="pa-6 rounded-xl elevation-2">
      <!-- Header -->
      <v-row class="justify-space-between align-center mb-6">
        <v-col cols="12" md="6">
          <h2 class="mb-1 font-weight-bold">
            All Staff
          </h2>
          <p class="text-subtitle-2">
            View, search for and add new staff
          </p>
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-end align-center">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar staff"
            outlined
            dense
            hide-details
            class="mr-4"
          />
          <v-btn color="primary" class="rounded-lg font-weight-bold" @click="addStaff">
            Add New Staff
          </v-btn>
        </v-col>
      </v-row>

      <!-- Card for total count -->
      <v-row class="mb-4">
        <v-col cols="12" md="3">
          <v-card class="pa-4 text-center rounded-lg elevation-1">
            <div class="text-h5 font-weight-bold">
              {{ filteredStaff.length }}
            </div>
            <div class="text-caption">
              Total number of staff
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Tabla de datos sin slots personalizados -->
      <v-data-table
        :headers="headers"
        :items="filteredStaff"
        :items-per-page="12"
        class="elevation-1 rounded-lg"
        dense
        :loading="loading"
        loading-text="Cargando personal..."
      >
        <template #item="{ item }">
          <tr>
            <td>{{ item.nombre }}</td>
            <td>{{ item.apaterno }}</td>
            <td>{{ item.genero }}</td>
            <td>{{ item.staffid }}</td>
            <td>{{ item.telefono }}</td>
            <td>{{ item.rol }}</td>
            <td>{{ item.designacion }}</td>
            <td>
              <a href="#" @click.prevent="viewMore(item)">
                View more
              </a>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'StaffList',
  data () {
    return {
      search: '',
      staffs: [],
      loading: false,
      headers: [
        { text: 'First Name', value: 'nombre' },
        { text: 'Last Name', value: 'last_name' },
        { text: 'Gender', value: 'gender' },
        { text: 'Staff ID', value: 'staff_id' },
        { text: 'Phone Number', value: 'phone' },
        { text: 'Role', value: 'role' },
        { text: 'Designation', value: 'designation' },
        { text: 'Action', value: 'action', sortable: false }
      ]
    }
  },
  computed: {
    filteredStaff () {
      const term = this.search.toLowerCase()
      return this.staffs.filter(staff =>
        Object.values(staff).some(val =>
          typeof val === 'string' && val.toLowerCase().includes(term)
        )
      )
    }
  },
  methods: {
    addStaff () {
      // Aquí puedes redirigir o mostrar un modal
      alert('Ir al formulario para agregar nuevo staff')
    },
    viewMore (item) {
      // Ejemplo: navegación programática
      this.$router.push(`/staff/${item.staff_id}`)
    }
  },
  async mounted () {
    this.loading = true
    try {
      const response = await this.$axios.get('/staffs')
      this.staffs = response.data.staffs
    } catch (error) {
      console.error('Error al cargar el staff:', error)
    } finally {
      this.loading = false
    }
  }
}
</script>
