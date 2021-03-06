import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class VaultsService {
  async getVaults() {
    const res = await api.get('api/vaults')
    logger.log('da vaults', res.data)
    AppState.vaults = res.data
  }

  async createVault(newVault) {
    const res = await api.post('api/vaults', newVault)
    logger.log(res.data)
  }

  async deleteVault(id) {
    await api.delete('api/vaults/' + id)
    AppState.vaults = AppState.vaults.filter(v => v.id !== id)
  }
}
export const vaultsService = new VaultsService()
