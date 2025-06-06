<template>
  <div class="layout">
    <aside class="sidebar">
      <img src="~assets/logo.png" alt="Logo" class="logo" />
      <ul>
        <li v-for="item in menuItems" :key="item.label">
          <nuxt-link :to="item.route" class="menu-link">
            <i :class="item.icon" class="icon"></i>
            <span>{{ item.label }}</span>
          </nuxt-link>
        </li>
      </ul>
    </aside>
    <main class="content">
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        { label: 'Dashboard', route: '/pages/dashboard', icon: 'fas fa-tachometer-alt' },
        { label: 'Staff', route: '/components/staffList', icon: 'fas fa-users' },
        { label: 'Payment Voucher', route: '/pages/payment-voucher', icon: 'fas fa-file-invoice-dollar' },
        { label: 'Payroll', route: '/pages/payroll', icon: 'fas fa-wallet' },
        { label: 'Memo', route: '/pages/memo.vue', icon: 'fas fa-sticky-note' },
        { label: 'Circular', route: '/pages/circular', icon: 'fas fa-bullhorn' },
        { label: 'Maintenance', route: '/pages/maintenance', icon: 'fas fa-tools' },
        { label: 'Logistics', route: '/store/logistics', icon: 'fas fa-truck' },
        { label: 'Office Budget', route: '/office-budget', icon: 'fas fa-building' },
        { label: 'Stocks and Inventory', route: '/stocks', icon: 'fas fa-boxes' },
        { label: 'Notifications', route: '/notifications', icon: 'fas fa-bell' },
        { label: 'Capacity Building', route: '/capacity-building', icon: 'fas fa-chalkboard-teacher' },
        { label: 'Procurements', route: '/procurements', icon: 'fas fa-shopping-cart' }
      ]
    }
  }
}
</script>

<style scoped>
.layout {
  display: flex;
  width: 1440px;
  height: 1065px;
  background: #F8F9FD;
  overflow: hidden;
}

.sidebar {
  width: 250px;
  background: #ffffff;
  color: #333;
  padding: 20px;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  /* No scroll aquí */
  overflow: hidden;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.logo {
  width: 75%;
  height: 76px;
  margin-top: 7px;
  margin-left: 20px;
  margin-bottom: 16px;
  border-radius: 8px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-link {
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  transition: background 0.3s;
}

.menu-link:hover {
  background: #f0f0f0;
}

.icon {
  margin-right: 10px;
  width: 20px;
  text-align: center;
}

.content {
  margin-left: 250px;
  padding: 20px;
  width: calc(100% - 250px);
  height: 100vh;
  overflow-y: auto;
}
</style>
