import { ProxyState } from "../AppState.js"
import { Gift } from "../Models/Gift.js"
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
        console.log(res.data.data);
        ProxyState.gifts = res.data.data.map(g => new Gift(g))
    }

}

export const giftsService = new GiftsService()