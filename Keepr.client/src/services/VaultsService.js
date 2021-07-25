import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class VaultsService {
  async getVaults() {
    const res = await api.get('api/vaults')
    logger.log('da vaults', res.data)
    AppState.vaults = res.data
  }
}
export const vaultsService = new VaultsService()
