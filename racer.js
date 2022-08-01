export class Racer {

    constructor(name,img){
        this.name = name
        this.img = img
        
}


get Template(){
    return `
    <div class="row">
        <div class="col-4 bg-primary text-light ">
        <span id="racer1"></span><img src="${this.img}" alt="" class="img-fluid"</div>
    </div>
    `
}

}