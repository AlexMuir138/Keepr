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
}
export const keepsService = new KeepsService()

// async createMerchant(newMerchant) {
//   const res = await api.post('api/merchants', newMerchant)
//   logger.log(res.data)
//   AppState.activeMerchant = res.data
// }
