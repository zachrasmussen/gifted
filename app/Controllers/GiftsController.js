import { Pop } from "../Utils/Pop.js"
import { giftsService } from "../Services/GiftsService.js";



export class GiftsController{ 
    constructor(){ 
    }

    async getGifts(){
        try {
            event.preventDefault();
            await giftsService.getGifts(event.target.search.value)
            console.log('controller get gifts loaded')
        } catch (error) {
            Pop.error(error)
            console.log('[Get Gifts]', error)
        }
    }
}