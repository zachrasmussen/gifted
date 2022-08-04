import { Pop } from "../Utils/Pop.js"
import { giftsService } from "../Services/GiftsService.js";



export class GiftsController{ 
    constructor(){ 
        this.getGifts()
    }

    async getGifts(){
        try {
            await giftsService.getGifts()
            console.log('controller get gifts loaded')
        } catch (error) {
            Pop.error(error)
            console.log('[Get Gifts]', error)
        }
    }
}