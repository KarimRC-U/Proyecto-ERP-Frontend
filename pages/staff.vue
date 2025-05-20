<template>
  <div class="space-y-6 px-6 pt-6">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold text-gray-900">
        Staff List
      </h1>
      <button
        class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md text-sm font-semibold shadow"
        @click="showModal = true"
      >
        + Add Staff
      </button>
    </div>

    <div class="bg-white shadow rounded-xl overflow-hidden">
      <table class="min-w-full text-sm text-gray-800">
        <thead class="bg-gray-100 text-xs text-gray-500 uppercase tracking-wide">
          <tr>
            <th class="px-6 py-4 text-left">
              S/N
            </th>
            <th class="px-6 py-4 text-left">
              First Name
            </th>
            <th class="px-6 py-4 text-left">
              Last Name
            </th>
            <th class="px-6 py-4 text-left">
              Gender
            </th>
            <th class="px-6 py-4 text-left">
              Staff ID
            </th>
            <th class="px-6 py-4 text-left">
              Phone Number
            </th>
            <th class="px-6 py-4 text-left">
              Role
            </th>
            <th class="px-6 py-4 text-left">
              Designation
            </th>
            <th class="px-6 py-4 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="staff in staffList"
            :key="staff.id"
            class="hover:bg-gray-50 transition border-b"
          >
            <td class="px-6 py-4 font-medium">{{ staff.firstName }}</td>
            <td class="px-6 py-4 font-medium">{{ staff.lastName }}</td>
            <td class="px-6 py-4">{{ staff.gender }}</td>
            <td class="px-6 py-4">{{ staff.id }}</td>
            <td class="px-6 py-4">{{ staff.phone }}</td>
            <td class="px-6 py-4">{{ staff.role }}</td>
            <td class="px-6 py-4">{{ staff.designation }}</td>
            <td class="px-6 py-4">{{ staff.action }}</td>
            <td class="px-6 py-4">
              <span
                :class="[
                  'inline-block px-3 py-1 rounded-full text-xs font-semibold',
                  staff.active ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                ]"
              >
                {{ staff.active ? 'Active' : 'Inactive' }}
              </span>
            </td>
            <td class="px-6 py-4 space-x-2">
              <button class="text-blue-600 hover:text-blue-800 font-medium">Edit</button>
              <button class="text-red-600 hover:text-red-800 font-medium">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div class="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg space-y-4 relative">
        <h2 class="text-xl font-bold text-gray-800">Add New Staff</h2>
        <input
          v-model="newStaff.firstName"
          placeholder="First Name"
          class="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          v-model="newStaff.lastName"
          placeholder="Last Name"
          class="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          v-model="newStaff.gender"
          placeholder="Gender"
          class="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          v-model="newStaff.id"
          placeholder="Staff ID"
          class="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          v-model="newStaff.phone"
          placeholder="Phone Number"
          class="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          v-model="newStaff.role"
          placeholder="Role"
          class="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          v-model="newStaff.designation"
          placeholder="Designation"
          class="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          v-model="newStaff.action"
          placeholder="Action"
          class="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div class="flex justify-end space-x-3">
          <button class="px-4 py-2 text-sm rounded-md bg-gray-100 hover:bg-gray-200" @click="showModal = false">
            Cancel
          </button>
          <button class="px-4 py-2 text-sm rounded-md bg-blue-600 hover:bg-blue-700 text-white" @click="addStaff">
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showModal: false,
      newStaff: {
        fisrtName: '',
        lastName: '',
        gender: '',
        id: '',
        phone: '',
        role: ' ',
        designation: '',
        action: ''
      },
      staffList: [
        { firstName: 'Sandra', lastName: 'Williams', gender: 'Female', id: '873959', phone: '4658583738', role: 'Admin', designation: 'Human Reources', active: true },
        { firstName: 'Abukabar', lastName: 'Ibrahim', gender: 'Male', id: '873899', phone: '4658583739', role: 'I:T', designation: 'Operations', active: true }
      ]
    }
  },
  methods: {
    addStaff () {
      if (!this.newStaff.name || !this.newStaff.email) {
        return
      }
      this.staffList.push({
        id: Date.now(),
        ...this.newStaff,
        active: true
      })
      this.newStaff = { name: '', position: '', email: '' }
      this.showModal = false
    }
  }
}
</script>

<style scoped>
table {
  min-width: 640px;
}
</style>
