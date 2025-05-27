<template>
  <v-container>
    <v-card>
      <v-card-title class="d-flex justify-space-between">
        <span>Buscar staff</span>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Buscar"
          single-line
          hide-details
        />
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="filteredStaff"
        class="elevation-1"
        :items-per-page="5"
      >
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
      headers: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Apellido Paterno', value: 'apaterno' },
        { text: 'Apellido Materno', value: 'amaterno' },
        { text: 'Correo', value: 'correo' },
        { text: 'Rol', value: 'rol' },
        { text: 'Estado', value: 'estado' },
        { text: 'Teléfono', value: 'telefono' }
      ]
    }
  },
  computed: {
    filteredStaff () {
      const term = this.search.toLowerCase()
      return this.staffs.filter(function (staff) {
        return Object.values(staff).some(function (value) {
          return (
            typeof value === 'string' &&
            value.toLowerCase().includes(term)
          )
        })
      })
    }
  },
  async mounted () {
    try {
      const response = await this.$axios.get('/api/staff')
      console.log('Respuesta API /api/staff:', response.data)
      this.staffs = response.data.staffs
      console.log('Datos asignados a staffs:', this.staffs)
    } catch (error) {
      console.error('Error al cargar el staff:', error)
    }
  }
}
</script>
