<template>
  <v-container fluid>
    <v-card class="pa-6 rounded-xl elevation-2">
      <v-row class="justify-space-between align-center mb-6">
        <v-col cols="6">
          <h2 class="mb-1 font-weight-bold">
            All Staff
          </h2>
        </v-col>
        <v-col cols="6" class="d-flex justify-end align-center">
          <v-avatar size="50">
            <img :src="staffImage" alt="Staff Image">
          </v-avatar>
          <div class="ml-2 text-caption">
            <p class="mb-1">{{ staffName }}</p>
            <p class="text-subtitle-2">{{ staffRole }}</p>
          </div>
        </v-col>
      </v-row>

      <!-- Barra de búsqueda y filtros -->
      <v-row class="mb-4 align-center">
        <v-col cols="3">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar staff"
            outlined
            dense
            hide-details
            class="small-search"
          />
        </v-col>
        <v-col cols="2">
          <v-card class="pa-2 text-center rounded-lg elevation-1">
            <div class="text-h6 font-weight-bold">
              {{ filteredStaff.length }}
            </div>
            <div class="text-caption">
              Total Staff
            </div>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-select
            v-model="filter"
            :items="filterOptions"
            label="Fiter staff"
            outlined
            dense
            hide-details
          />
        </v-col>
        <v-col cols="4" class="d-flex justify-end">
          <v-btn color="#14ADD6" class="rounded-lg font-weight-bold" @click="addStaff">
            Add New Staff
          </v-btn>
        </v-col>
      </v-row>

      <!-- Tabla de staff -->
      <v-data-table
        :headers="headers"
        :items="filteredStaff"
        :items-per-page="12"
        class="elevation-1 rounded-lg"
        dense
        :loading="loading"
        loading-text="Cargando..."
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
  name: 'StaffsAll',
  data () {
    return {
      search: '',
      filter: '',
      staffs: [],
      loading: false,
      staffImage: 'staff-placeholder.jpg', // Imagen del staff
      staffName: 'John Doe',
      staffRole: 'Manager',
      filterOptions: ['All staff', 'Admin staff', 'I.T staff', 'RH staff'],
      headers: [
        { text: 'First Name', value: 'nombre' },
        { text: 'Last Name', value: 'apaterno' },
        { text: 'Gender', value: 'genero' },
        { text: 'Staff ID', value: 'staffid' },
        { text: 'Phone Number', value: 'telefono' },
        { text: 'Role', value: 'rol' },
        { text: 'Designation', value: 'designacion' },
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
      console.log('Add Staff button clicked')
      this.$router.push('/principal/staffs/menuCrear')
    },
    viewMore (item) {
      this.$router.push(`/staff/${item.staffid}`)
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
