import { Pop } from "../Utils/Pop.js"


export class GiftsController{ 
    constructor(){ 
        this.getGifts
    }

    async getGifts(){
        try {
            await giftsService.getGifts()
        } catch (error) {
            Pop.error(error)
            console.log('[Get Gifts]', error)
        }
    }
}