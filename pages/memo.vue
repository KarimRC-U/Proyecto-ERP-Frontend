<template>
  <v-container fluid>
    <v-card class="pa-6 rounded-xl elevation-2">
      <v-row class="justify-space-between align-center mb-6">
        <v-col cols="6">
          <h2 class="mb-1 font-weight-bold">
            Memo
          </h2>
        </v-col>
        <v-col cols="6" class="d-flex justify-end align-center">
          <v-avatar size="50">
            <img :src="staffImage" alt="Staff Image">
          </v-avatar>
          <div class="ml-2 text-caption">
            <p class="mb-1">{{ nombre }}</p>
            <p class="text-subtitle-2">{{ rol }}</p>
          </div>
        </v-col>
      </v-row>

      <v-row class="mb-4 align-center">
        <v-col cols="3">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Enter search word"
            outlined
            dense
            hide-details
            class="small-search"
          />
        </v-col>
        <v-col cols="2">
          <v-card class="pa-2 text-center rounded-lg elevation-1">
            <div class="text-h6 font-weight-bold">
              {{ filteredMemo.length }}
            </div>
            <div class="text-caption">
              Total Memo
            </div>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-select
            v-model="filter"
            :items="filterOptions"
            label="All Memo"
            outlined
            dense
            hide-details
          />
        </v-col>
        <v-col cols="4" class="d-flex justify-end">
          <v-btn color="#14ADD6" class="rounded-lg font-weight-bold" @click="addMemo">
            Create Memo
          </v-btn>
        </v-col>
      </v-row>

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
            <td>{{ item.memoNo }}</td>
            <td>{{ item.sentFrom }}</td>
            <td>{{ item.sentTo.join(', ') }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.attachments ? 'Sí' : 'No' }}</td>
            <td>{{ item.memotype }}</td>
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
  name: 'AllMemo',
  data () {
    return {
      search: '',
      filter: '',
      memo: [],
      loading: false,
      staffImage: 'staff-placeholder.jpg', // Imagen del staff
      staffName: 'nombre',
      staffRole: 'rol',
      filterOptions: ['Todos'],
      headers: [
        { text: 'Memo title', value: 'memoNo' },
        { text: 'Sent From', value: 'sentFrom' },
        { text: 'Sent To', value: 'sentTo' },
        { text: 'Date', value: 'date' },
        { text: 'Attachement?', value: 'attachments' },
        { text: 'Memo Type', value: 'memoType' },
        { text: 'Action', value: 'action', sortable: false }
      ]
    }
  },
  computed: {
    filteredMemo () {
      const term = this.search.toLowerCase()
      return this.memo.filter(memo =>
        Object.values(memo).some(val =>
          typeof val === 'string' && val.toLowerCase().includes(term)
        ) || memo.sentTo.some(to => to.toLowerCase().includes(term))
      )
    }
  },
  methods: {
    addMemo () {
      alert('Ir al formulario para agregar nuevo staff')
    },
    viewMore (item) {
      this.$router.push(`/staff/${item.staffid}`)
    }
  },
  async mounted () {
    this.loading = true
    try {
      const response = await this.$axios.get('/memo')
      this.memo = response.data.memo.map(item => new this.Memo(item))
    } catch (error) {
      console.error('Error al cargar', error)
    } finally {
      this.loading = false
    }
  }
}
</script>
