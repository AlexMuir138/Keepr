<template>
  <div class="Keep col-lg-3">
    <div class="p-3">
      <h3 class="text-secondary text-center">
        <p @click="setActiveKeep" data-toggle="modal" data-target="#exampleModalCenter" title="View Keep">
          <u>{{ keep.name }}</u>
        </p>
      </h3>
      <img class="img-fluid rounded drop-shadow" :src="keep.img" alt="">
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { keepsService } from '../services/KeepsService'
export default {
  props: {
    keep: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
    })
    return {
      state,
      setActiveKeep() {
        keepsService.setActiveKeep(props.keep)
      }
    }
  }
}
</script>

<style scoped>

</style>
