<template>
  <div class="Keep col-lg-4">
    <div class="row">
      <div class="col-10 p-3">
        <h3 class="text-secondary text-center">
          {{ keep.name }}
        </h3>
        <img class="img-fluid rounded drop-shadow" :src="keep.img" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  props: {
    keep: { type: Object, required: true }
  },
  setup() {
    const state = reactive({
    })
    return { state }
  }
}
</script>

<style scoped>

</style>
