import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class KeepsService {
  async getAllKeeps() {
    const res = await api.get('api/keeps')
    logger.log('da keeps', res.data)
    AppState.keeps = res.data
  }

  async createKeep(newKeep) {
    const res = await api.post('api/keeps', newKeep)
    logger.log(res.data)
  }

  async changeVault(vaultId, updatedKeep) {
    const res = await api.put('api/vaults/' + vaultId + '/keeps/' + updatedKeep.id, updatedKeep)
    AppState.keeps[vaultId] = AppState.keeps[vaultId].filter(k => k.id !== res.data.id)
    AppState.keeps[res.data.vaultId].push(res.data)
  }
}
export const keepsService = new KeepsService()

// vvv this is the function that worked for kanban
// async changeList(listId, updatedTask) {
//   const res = await api.put('api/lists/' + listId + '/tasks/' + updatedTask.id, updatedTask)
//   AppState.tasks[listId] = AppState.tasks[listId].filter(t => t.id !== res.data.id)
//   AppState.tasks[res.data.listId].push(res.data)
// }
