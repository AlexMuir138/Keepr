<template>
  <div class="modal"
       id="exampleModalCenter"
       tabindex="-1"
       role="dialog"
       aria-labelledby="exampleModalCenterTitle"
       aria-hidden="true"
  >
    <div class=" modal-dialog modal-dialog-centered" role="document">
      <div class="comment-form modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-light" id="exampleModalLongTitle">
            <u> {{ activeKeep.name }}</u>
          </h5>
          <div class="dropdown px-5">
            <button class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    title="Move to new vault"
            >
              Move to Vault...
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                class="dropdown-item"
                v-for="vault in vaults"
                :key="vault.id"
                @click="changeKeep(vault.id)"
                :title="vault.name"
              >
                {{ vault.name }}
              </a>
            </div>
          </div>
          <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close" title="close keep">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { keepsService } from '../services/KeepsService'
import { vaultsService } from '../services/VaultsService'
import { useRoute } from 'vue-router'
import Notification from '../utils/Notification'
export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      updatedKeep: { id: AppState.activeKeep.id }
    })
    return {
      state,
      activeKeep: computed(() => AppState.activeKeep),
      vaults: computed(() => AppState.lists),
      async changeKeep(newVaultId) {
        state.updatedTask.listId = newVaultId
        try {
          await keepsService.changeVault(AppState.activeKeep.vaultId, state.updatedKeep)
        } catch (error) {
          Notification.toast(error.message, 'error')
        }
        // eslint-disable-next-line no-undef
        $('#exampleModalCenter').hide()
        // eslint-disable-next-line no-undef
        $('.modal-backdrop').hide()

        await vaultsService.getVaults(route.params.id)
      }

    }
  }
}
</script>

<style >

</style>
