<template>
  <div class="container-fluid">
    <div class="about text-center">
      <h1>Welcome {{ account.name }}</h1>
      <img class="rounded" :src="account.picture" alt="" />
      <p>{{ account.email }}</p>
    </div>
  </div>
  <div class="container-fluid">
    <form class="form-group col-md-8" @submit.prevent="createKeep">
      <h3 class="mb-3">
        Create A New Keep
      </h3>
      <hr>
      <input type="text"
             class="form-control "
             name="merchantName"
             id=""
             aria-describedby="helpId"
             placeholder=""
             v-model="state.newKeep.name"
      >
      <small id="helpId" class="form-text text-muted mb-2">Keep Name</small>
      <input type="text"
             class="form-control"
             name="merchantName"
             id=""
             aria-describedby="helpId"
             placeholder=""
             v-model="state.newKeep.description"
      >
      <small id="helpId" class="form-text text-muted">Keep Description</small>
      <input type="text"
             class="form-control"
             name="merchantName"
             id=""
             aria-describedby="helpId"
             placeholder=""
             v-model="state.newKeep.img"
      >
      <small id="helpId" class="form-text text-muted">Keep Img</small>
      <button class="mt-5 btn btn-block btn-info">
        Create
      </button>
    </form>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <Vault v-for="v in vaults" :key="v.id" :vault="v" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { keepsService } from '../services/KeepsService'
import { vaultsService } from '../services/VaultsService'
export default {
  setup() {
    onMounted(() => {
      vaultsService.getVaults()
    })
    const state = reactive({
      newKeep: {}
    })
    return {
      state,
      vaults: computed(() => AppState.vaults),
      account: computed(() => AppState.account),
      createKeep() {
        keepsService.createKeep(state.newKeep)
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
