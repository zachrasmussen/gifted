import { ProxyState } from "../AppState.js"
import { Gift } from "../Models/Gift.js"
import { giftsApi, sandboxApi } from "./AxiosService.js"


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

    previewSelected(){
        let url = ProxyState.gifts.url 
        console.log('url')
        document.getElementById('url-preview').textContent = url
        ProxyState.gifts = ProxyState.gifts
    }

    // setActiveGift(id){
    //     const res = await sandboxApi
    // }
}

export const giftsService = new GiftsService()