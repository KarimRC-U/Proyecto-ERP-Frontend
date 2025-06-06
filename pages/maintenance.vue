<template>
  <v-container fluid>
    <v-card class="pa-6 rounded-xl elevation-2 mb-4">
      <v-row class="justify-space-between align-center mb-6">
        <v-col cols="6">
          <h2 class="mb-1 font-weight-bold">Maintenance</h2>
        </v-col>
        <v-col cols="6" class="d-flex justify-end align-center">
          <v-avatar size="50">
            <img src="/images/staff.jpg" alt="Staff Image">
          </v-avatar>
          <div class="ml-2 text-caption">
            <p class="mb-1">{{ nombre }}</p>
            <p class="text-subtitle-2">{{ rol }}</p>
          </div>
        </v-col>
      </v-row>
    </v-card>

    <v-row class="mb-4">
      <v-col cols="12" sm="3" v-for="(card, i) in cards" :key="i">
        <v-card :color="card.color" white>
          <v-card-title class="headline">
            {{ card.title }}
          </v-card-title>
          <v-card-subtitle>{{ card.count }} (↑ 2 from last quarter)</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <v-row align="center" justify="space-between">
      <h2>Schedule a Maintenance</h2>
      <v-btn color="#14ADD6" class="mt-2 font-weight-bold" @click="dialog = true">
        Schedule Maintenance
      </v-btn>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-date-picker v-model="selectedDate" @input="fetchByDate" />
      </v-col>
      <v-col cols="12" md="6">
        <v-list two-line subheader>
          <v-subheader>Scheduled Maintenance</v-subheader>
          <v-list-item v-for="(item, index) in maintenances" :key="index">
            <v-list-item-content>
              <v-list-item-title>
                {{ index + 1 }}. {{ item.type }} for {{ item.itemName }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ formatDate(item.date) }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn small color="#F8F9FD" @click="viewItem(item)">View</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title>New Maintenance</v-card-title>
        <v-card-text>
          <v-text-field label="Item Name" v-model="newMaintenance.itemName" />
          <v-text-field label="Item Number" v-model="newMaintenance.itemNumber" />
          <v-menu
             ref="menu"
             v-model="menu"
             :close-on-content-click="false"
             transition="scale-transition"
             offset-y
             min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="newMaintenance.date" label="Date" readonly v-bind="attrs" v-on="on" />
            </template>
            <v-date-picker v-model="newMaintenance.date" no-title scrollable @input="menu = false" />
          </v-menu>
          <v-text-field label="Type" v-model="newMaintenance.type" />
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="dialog = false">Cancel</v-btn>
          <v-btn color="#F8F9FD" @click="submitMaintenance">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      menu: false,
      selectedDate: null,
      maintenances: [],
      nombre: 'John Doe', // Nombre del usuario
      rol: 'Manager', // Rol del usuario
      cards: [
        { title: 'Scheduled maintenance', color: 'blue', count: 25 },
        { title: 'Completed maintenance', color: 'green', count: 25 },
        { title: 'Pending maintenance', color: 'orange', count: 25 },
        { title: 'Overdue maintenance', color: 'red', count: 25 }
      ],
      newMaintenance: {
        itemName: '',
        itemNumber: '',
        date: '',
        type: '',
        status: 'Pending'
      }
    }
  },
  methods: {
    async fetchByDate (date) {
      const response = await this.$axios.get(`/api/maintenance?date=${date}`)
      this.maintenances = response.maintenances || []
    },
    formatDate (date) {
      return new Date(date).toLocaleDateString()
    },
    viewItem (item) {
      alert(JSON.stringify(item, null, 2))
    },
    async submitMaintenance () {
      await this.$axios.post('/api/maintenance', this.newMaintenance)
      this.dialog = false
      this.fetchByDate(this.selectedDate)
    }
  },
  mounted () {
    if (this.selectedDate) {
      this.fetchByDate(this.selectedDate)
    }
  }
}
</script>

<style scoped>
.headline {
  font-weight: bold;
}
</style>
