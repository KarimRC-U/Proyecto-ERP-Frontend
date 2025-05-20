<template>
  <aside class="w-64 bg-gray-900 text-white h-screen p-4 space-y-4 shadow-lg">
    <div class="text-xl font-bold mb-6">
      ERP Menu
    </div>

    <nav class="flex flex-col space-y-2">
      <NuxtLink v-for="item in menuItems"
      :key="item.label"
      :to="item.route"
        class="flex items-center px-3 py-2 rounded hover:bg-gray-800 transition">
        <component :is="item.icon" class="w-5 h-5 mr-3" />
        <span>{{ item.label }}</span>
      </NuxtLink>
    </nav>
  </aside>
</template>

<script>
import {
  HomeIcon,
  UsersIcon,
  FileTextIcon,
  ClipboardIcon,
  EditIcon,
  RepeatIcon,
  ToolIcon,
  TruckIcon,
  DollarSignIcon,
  BoxIcon,
  BellIcon,
  UserCheckIcon,
  ShoppingCartIcon
} from 'vue-feather-icons'

export default {
  components: {
    HomeIcon,
    UsersIcon,
    FileTextIcon,
    ClipboardIcon,
    EditIcon,
    RepeatIcon,
    ToolIcon,
    TruckIcon,
    DollarSignIcon,
    BoxIcon,
    BellIcon,
    UserCheckIcon,
    ShoppingCartIcon
  },

  data () {
    return {
      menuItems: [
        { label: 'Dashboard', icon: 'HomeIcon', route: '/dashboard' },
        { label: 'Staff', icon: 'UsersIcon', route: '/staff' },
        { label: 'Payment Voucher', icon: 'FileTextIcon', route: '/payment-voucher' },
        { label: 'Payroll', icon: 'ClipboardIcon', route: '/payroll' },
        { label: 'Memo', icon: 'EditIcon', route: '/memo' },
        { label: 'Circular', icon: 'RepeatIcon', route: '/circular' },
        { label: 'Maintenance', icon: 'ToolIcon', route: '/maintenance' },
        { label: 'Logistics', icon: 'TruckIcon', route: '/logistics' },
        { label: 'Office Budget', icon: 'DollarSignIcon', route: '/office-budget' },
        { label: 'Stocks & Inventory', icon: 'BoxIcon', route: '/stocks-inventory' },
        { label: 'Notifications', icon: 'BellIcon', route: '/notifications' },
        { label: 'Capacity Building', icon: 'UserCheckIcon', route: '/capacity-building' },
        { label: 'Procurements', icon: 'ShoppingCartIcon', route: '/procurements' }
      ]
    }
  }
}
</script>

<style scoped>
aside {
  z-index: 50;
}
</style>
