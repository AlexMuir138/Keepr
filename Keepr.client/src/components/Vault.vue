<template>
  <div class="Vault card m-3">
    <div class="p-3">
      <h3 class="text-primary text-center">
        <u>{{ vault.name }}</u>
        <u></u>
      </h3>
      <h4 class="text-center p-3">
        {{ vault.description }}
      </h4>
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
