<template>
  <div class="row d-flex justify-content-center">
    <div class="col-12">
      <ActiveKeep v-if="activeKeep" />
    </div>
  </div>
  <Keep v-for="k in keeps" :key="k.id" :keep="k" />
</template>

<script>
import { computed, onMounted } from 'vue'
import { keepsService } from '../services/KeepsService'
import { AppState } from '../AppState'
export default {
  setup() {
    onMounted(() => {
      keepsService.getAllKeeps()
    })
    return {
      keeps: computed(() => AppState.keeps),
      activeKeep: computed(() => AppState.activeKeep)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
