export class Gift {
    constructor(data) {
        this.img = data.images.downsized.url,
            this.url = data.url,
            this.id = data.id
    }

    get Template() {
        return `
    <div onclick="app.giftsController.previewSelected()">
    <img src="${this.img}" alt=""> 
    </div>
    `
    }
}