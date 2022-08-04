export class Gift {
    constructor(data) {
        this.img = data.images.downsized.url,
            this.url = data.url,
            this.id = data.id
    }

    get Template() {
        return `
    <div>
    <img src="${this.img}" alt="" onclick="app.giftsController.previewSelected()" class="selectable"> 
    </div>
    `
    }
}