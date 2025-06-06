<template>
  <DefaultLayout>
    <v-container>
      <StaffsAll />
    </v-container>
  </DefaultLayout>
</template>

<script>
import StaffsAll from '~/components/staffs/StaffsAll.vue'
import DefaultLayout from '@/layouts/defaultLayout.vue'
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  name: 'IndexPage',
  components: {
    DefaultLayout,
    StaffsAll
  }
}
</script>
