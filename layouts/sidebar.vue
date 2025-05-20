<template>
  <div class="flex min-h-screen bg-[#F4F5FA]">
    <aside class="w-64 bg-[#1E1E2D] text-white flex flex-col">
      <div class="h-16 flex items-center justify-center border-b border-gray-700">
        <span class="text-xl font-bold">OTOR ERP</span>
      </div>

      <nav class="flex-1 px-4 py-6 space-y-2 text-sm">
        <SidebarLink to="/dashboard" label="Dashboard">
          <LayoutIcon class="w-5 h-5" />
        </SidebarLink>
        <SidebarLink to="/staff" label="Staff">
          <UsersIcon class="w-5 h-5" />
        </SidebarLink>
        <SidebarLink to="/payment-voucher" label="Payment Voucher">
          <FileTextIcon class="w-5 h-5" />
        </SidebarLink>
        <SidebarLink to="/payroll" label="Payroll">
          <DollarSignIcon class="w-5 h-5" />
        </SidebarLink>
        <SidebarLink to="/memo" label="Memo">
          <ClipboardIcon class="w-5 h-5" />
        </SidebarLink>
        <SidebarLink to="/circular" label="Circular">
          <RepeatIcon class="w-5 h-5" />
        </SidebarLink>
        <SidebarLink to="/maintenance" label="Maintenance">
          <SettingsIcon class="w-5 h-5" />
        </SidebarLink>
        <SidebarLink to="/logistics" label="Logistics">
          <TruckIcon class="w-5 h-5" />
        </SidebarLink>
        <SidebarLink to="/office-budget" label="Office Budget">
          <WalletIcon class="w-5 h-5" />
        </SidebarLink>
        <SidebarLink to="/stocks-inventory" label="Stocks & Inventory">
          <BoxIcon class="w-5 h-5" />
        </SidebarLink>
        <SidebarLink to="/notifications" label="Notifications">
          <BellIcon class="w-5 h-5" />
        </SidebarLink>
        <SidebarLink to="/capacity-building" label="Capacity Building">
          <BookOpenIcon class="w-5 h-5" />
        </SidebarLink>
        <SidebarLink to="/procurements" label="Procurements">
          <ShoppingCartIcon class="w-5 h-5" />
        </SidebarLink>
      </nav>
    </aside>

    <main class="flex-1 p-6">
      <nuxt />
    </main>
  </div>
</template>

<script>
import LayoutIcon from 'vue-feather-icons/icons/LayoutIcon.vue'
import UsersIcon from 'vue-feather-icons/icons/UsersIcon.vue'
import FileTextIcon from 'vue-feather-icons/icons/FileTextIcon.vue'
import DollarSignIcon from 'vue-feather-icons/icons/DollarSignIcon.vue'
import ClipboardIcon from 'vue-feather-icons/icons/ClipboardIcon.vue'
import RepeatIcon from 'vue-feather-icons/icons/RepeatIcon.vue'
import SettingsIcon from 'vue-feather-icons/icons/SettingsIcon.vue'
import TruckIcon from 'vue-feather-icons/icons/TruckIcon.vue'
import WalletIcon from 'vue-feather-icons/icons/WalletIcon.vue'
import BoxIcon from 'vue-feather-icons/icons/BoxIcon.vue'
import BellIcon from 'vue-feather-icons/icons/BellIcon.vue'
import BookOpenIcon from 'vue-feather-icons/icons/BookOpenIcon.vue'
import ShoppingCartIcon from 'vue-feather-icons/icons/ShoppingCartIcon.vue'

export default {
  components: {
    LayoutIcon,
    UsersIcon,
    FileTextIcon,
    DollarSignIcon,
    ClipboardIcon,
    RepeatIcon,
    SettingsIcon,
    TruckIcon,
    WalletIcon,
    BoxIcon,
    BellIcon,
    BookOpenIcon,
    ShoppingCartIcon
  }
}
</script>

<component :is="'style'">
.sidebar-link {
  @apply flex items-center gap-3 px-4 py-2 rounded-md text-white hover:bg-gray-700 transition-colors;
}
.router-link-exact-active {
  @apply bg-gray-700;
}
</component>



