import {BeatModel} from './beat-model'
import {AppView} from './view/app-view'

export class BeatController {
  private model: BeatModel
  private view: AppView

  constructor() {
    this.model = new BeatModel(80)
    this.view = new AppView(this, this.model)
    this.view.attachToDocument()
  }

  start() {
    this.model.on()
    this.view.toggleStartButton()
  }

  stop() {
    this.model.off()
    this.view.toggleStartButton()
  }
}
