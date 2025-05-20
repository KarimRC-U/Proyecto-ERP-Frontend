<template>
  <nuxt-link :to="to" class="sidebar-link">
    <slot />
    <span>{{ label }}</span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: { type: String, required: true },
    label: { type: String, required: true }
  }
}
</script>
