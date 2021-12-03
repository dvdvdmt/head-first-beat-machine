import {BeatModel} from './beat-model'
import {AppView} from './view/app-view'

export class BeatController {
  private model: BeatModel
  private view: AppView

  constructor() {
    this.model = new BeatModel(80)
    this.view = new AppView({
      model: this.model,
      onBeatInput: this.setBeatPerMinute,
      onStop: this.stop,
      onStart: this.start,
    })
    this.view.attachToDocument()
  }

  start = () => {
    this.model.on()
    this.view.enableStartButton()
  }

  stop = () => {
    this.model.off()
    this.view.disableStartButton()
  }

  setBeatPerMinute = (value: number) => {
    this.model.bpm = value
  }
}
