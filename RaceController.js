import { AppState } from "./AppState.js";
console.log('controller-loaded')
console.log(AppState)

function _drawRacers(){
    let racer = AppState.racers
    let template = ''
    racer.forEach(racer => template += racer.Template)
    console.log(template);
    document.getElementById('racers').innerHTML = template
}



class Controller {
    constructor(){
        _drawRacers()
    }
}


























let controller = new Controller()

window['app'] = {controller : controller}