import { Pop } from "../Utils/Pop.js"
import { giftsService } from "../Services/GiftsService.js";



export class GiftsController{ 
    constructor(){ 
        this.getGifts(query)
    }

    async getGifts(query){
        try {
            await giftsService.getGifts(query)
            console.log('controller get gifts loaded')
        } catch (error) {
            Pop.error(error)
            console.log('[Get Gifts]', error)
        }
    }
}