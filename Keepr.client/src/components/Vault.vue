<template>
  <div class="Vault col-lg-3">
    <div class="p-3">
      <h3 class="text-secondary text-center">
        <u>{{ vault.name }}</u>
        <u>{{ vault.description }}</u>
      </h3>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  props: {
    vault: { type: Object, required: true }
  },
  setup() {
    const state = reactive({
    })
    return {
      state
    }
  }
}
</script>

<style scoped>

</style>
