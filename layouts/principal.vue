<template>
  <v-app>
    <v-navigation-drawer
      permanent
      app
      color="#F8FAFC"
    >
      <v-card elevation="1">
        <v-list dense>
          <v-divider class="mt-4" />
          <template v-for="(item, index) in items">
            <v-list-item
              v-if="!item.children && canAccess(item.roles)"
              :key="`item-${index}`"
              link
              @click="goTo(item.path)"
            >
              <v-list-item-icon>
                <v-icon color="blue">
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-group
              v-else-if="canAccess(item.roles)"
              :key="`group-${index}`"
              no-action
              prepend-icon="mdi-tools"
              append-icon="mdi-cheron-down"
            >
              <template #activator>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="(child, cIndex) in item.children"
                :key="`child-${index}-${cIndex}`"
                link
                @click="goTo(child.path)"
              >
                <v-list-item-icon>
                  <v-icon color="blue darkeen-3">
                    {{ child.icon }}
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ child.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>

            <v-divider v-if="item.title === 'Patients List'" :key="`divider-clinic-${index}`" class="my-2" />

            <v-divider v-if="item.title === 'Account'" :key="`divider-settings-${index}`" class="my-2" />
          </template>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-main>
      <v-alert
        v-if="$store.state.alert.visible"
        :type="$store.state.alert.type"
        dismissible
        top
        right
        class="position-fixed"
      >
        {{ $store.state.alert.message }}
      </v-alert>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  middleware: [],
  data () {
    return {
      items: [
        {
          title: 'Dashboard',
          icon: 'mdi-chart-bar',
          path: '/principal',
          roles: ['admin', 'rh']
        },
        {
          title: 'Doctor Appointment',
          icon: 'mdi-calendar-plus-outline',
          path: '/principal/doctor',
          roles: ['admin', 'rh', 'secretaria']
        },
        {
          title: 'Lab Appointment',
          icon: 'mdi-flask-outline',
          path: '/principal/laboratory',
          roles: ['admin', 'rh', 'secretaria']
        },
        {
          title: 'Patient List',
          icon: 'mdi-account-multiple',
          path: '/principal/patients',
          roles: ['admin', 'rh', 'secretaria']
        },
        {
          title: 'Clinic IP',
          icon: 'mdi-home-outline',
          path: '/principal/clinic',
          roles: ['admin', 'rh', 'secretaria']
        },
        {
          title: 'Billing',
          icon: 'mdi-home-outline',
          roles: ['admin', 'rh', 'secretaria'],
          children: []
        },
        {
          title: 'Account',
          icon: 'mdi-account-outline',
          path: '/principal/account',
          roles: ['admin', 'rh', 'secretaria']
        },
        {
          title: 'Settings',
          icon: 'mdi-tools',
          roles: ['admin'],
          children: [
            {
              title: 'Usuarios',
              icon: 'mdi-account-multiple',
              path: '/principal/configuracion/usuarios'
            },
            {
              title: 'Desbloquear Usuarios',
              icon: 'mdi-account-lock-open',
              path: '/principal/configuracion/desbloquear'
            }
          ]
        },
        {
          title: 'Cerrar Sesión',
          icon: 'mdi-logout',
          path: '/',
          roles: ['admin', 'rh', 'secretaria', 'doctor']
        }
      ]
    }
  },
  methods: {
    goTo (route) {
      if (route === '/') {
        this.logout()
      } else {
        this.$router.push(route)
      }
    },
    canAccess (allowedRoles) {
      return allowedRoles.includes(this.$auth.user.rol)
    },
    async logout () {
      try {
        await this.$axios.post('/users/logout')
        window.location.href = '/'
      } catch (error) {
        const errorMessage = error.response?.data?.message || 'Ocurrio un error al cerrar sesion'
        this.$store.dispatch('alert/triggerAlert', {
          message: errorMessage,
          type: 'error'
        })
      }
    }
  }
}
</script>

<style scoped>
.position-fixed {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 2000;
}
</style>
