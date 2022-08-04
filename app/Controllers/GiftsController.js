import { Pop } from "../Utils/Pop.js"
import { giftsService } from "../Services/GiftsService.js";
import { ProxyState } from "../AppState.js";

function _drawGifts() {
    let gifts = ProxyState.gifts
    if (!gifts) {
        return
    }
    let template = ''
    gifts.forEach(g => template += g.Template)
    document.getElementById('searched-gift').innerHTML = template
}

export class GiftsController {
    constructor() {
        ProxyState.on('gifts', _drawGifts)
    }

    async getGifts() {
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