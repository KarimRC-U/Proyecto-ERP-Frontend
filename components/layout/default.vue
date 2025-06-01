<template>
  <div class="flex min-h-screen bg-gray-100">
    <Sidebar />
    <main class="flex-1 p-6">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Sidebar from '~/components/layout/Sidebar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>
