<template>
  <div class="p-6 space-y-6">
    <!-- Header -->
    <div>
      <h2 class="text-2xl font-bold">Welcome, Mr. Otor John 👋</h2>
      <p class="text-sm text-gray-500">Today is Saturday, 11th November 2022</p>
    </div>

    <!-- Info cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <InfoCard title="Total number of staff" value="250" trend="+ 12 more than last quarter" />
      <InfoCard title="Total application" value="100" trend="0.2% lower than last quarter" />
      <InfoCard title="Total projects" value="10" trend="2% more than last quarter" />
      <InfoCard title="Total departments" value="10" />
    </div>

    <!-- Tables and Charts -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <MemoTable :memos="memos" />
      <StaffList :staff="staffList" />
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <PaymentVouchers :vouchers="vouchers" />
      <ApplicationsChart />
    </div>
  </div>
</template>

<script>
import InfoCard from '~/components/layout/InfoCard.vue'
import MemoTable from '~/components/layout/MemoTable.vue'
import StaffList from '~/components/layout/StaffList.vue'
import PaymentVouchers from '~/components/layout/PaymentVouchers.vue'
import ApplicationsChart from '~/components/layout/ApplicationsChart.vue'

export default {
  components: {
    InfoCard,
    MemoTable,
    StaffList,
    PaymentVouchers,
    ApplicationsChart
  },
  data() {
    return {
      memos: [
        { title: 'Operations memo', from: 'Otor John', to: 'Ibrahim Sadiq', status: 'Pending' },
        { title: 'Operations project memo', from: 'Fatima Faruk', to: 'Shola Abiola', status: 'Approved' },
        { title: 'Project onboard notice', from: 'Otor John', to: 'James Emeka', status: 'Approved' },
        { title: 'Operations memo', from: 'Ibrahim Musa', to: 'Otor John', status: 'Approved' }
      ],
      staffList: [
        { name: 'Abubakar Ismaila Goje', role: 'Admin', department: 'Human Resource Dept.' },
        { name: 'Ifeanyi Obinna', role: 'Admin', department: 'Management' },
        { name: 'Bankole Olanrewaju', role: 'HOD I.T', department: 'Peoples and Operation' },
        { name: 'Chidinma Ebere', role: 'HOD Account', department: 'Accounts' }
      ],
      vouchers: [
        { subject: 'Request for FARS for October 2022', date: '25/01/2023', status: 'Pending' },
        { subject: 'Request for project proposal fee', date: '19/01/2023', status: 'Approved' },
        { subject: 'Request for FARS for October 2022', date: '10/01/2023', status: 'Approved' },
        { subject: 'Request for project proposal fee', date: '03/01/2023', status: 'Pending' }
      ]
    }
  }
}
</script>





