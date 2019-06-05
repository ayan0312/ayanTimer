import tplTimer from '../template/timer.art'
import Icons from './icons'

export default class Template {

    constructor(options) {
        this.container = options.container
        this.options = options
        this.elements = {}

        this._init()
    }

    _init() {
        this.container.innerHTML = tplTimer({
            icons: Icons,
            options: this.options
        })

        this.elements.time = this.container.querySelector('.ayan-control-time')

        this.elements.options = {
            work: this.container.querySelector('.ayan-control-option-work'),
            rest: this.container.querySelector('.ayan-control-option-rest')
        }

        this.elements.buttons = {
            work: this.container.querySelector('.ayan-control-button-work'),
            rest: this.container.querySelector('.ayan-control-button-rest'),
            reset: this.container.querySelector('.ayan-control-button-reset'),
            now: this.container.querySelector('.ayan-control-button-now')
        }

        this.elements.select = {
            plan:this.container.querySelector('.ayan-select-list-plan'),
            history:this.container.querySelector('.ayan-select-list-plan')
        }

    }

    getItem(name) {
        return this.elements[name]
    }
}