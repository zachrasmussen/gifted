import { ProxyState } from "../AppState.js"
import { giftsApi } from "./AxiosService.js"


class GiftsService{
    async getGifts(){ 
        let res = await giftsApi.get('/search')
        console.log(res.data)
    }

}

export const giftsService = new GiftsService()