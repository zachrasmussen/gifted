import { ProxyState } from "../AppState.js"
import { giftsApi } from "./AxiosService.js"


class GiftsService {
    async getGifts(query) {
        let res = await giftsApi.get('/search', { 
            params: { 
                key: 'bjrxrpUa717fzgdLicV6jaGFsJaZsWuY',
                limit: 5,
                rating: 'pg',
                q: query
            } 
        })
        console.log(res.data)
    }

}

export const giftsService = new GiftsService()