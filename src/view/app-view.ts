import {IView} from './i-view'
import {Header} from './header/header'
import {BeatInput} from './beat-input/beat-input'
import {StartStopButton} from './start-stop-button/start-stop-button'
import {BeatBar} from './beat-bar/beat-bar'
import {BeatDisplay} from './beat-display/beat-display'
import {BeatModel} from '../beat-model'
import {BeatController} from '../beat-controller'

export class AppView implements IView {
  el: HTMLElement
  private firstHeader: Header
  private beatInput: BeatInput
  private startButton: StartStopButton
  private controller: BeatController
  private secondHeader: Header
  private pulsatingBar: BeatBar
  private beatDisplay: BeatDisplay
  private model: Readonly<BeatModel>

  constructor(controller: BeatController, model: BeatModel) {
    this.controller = controller
    this.model = model
    this.model.addEventListener(BeatModel.beatPlayedEvent, this.onBeatPlayed)
    this.model.addEventListener(BeatModel.beatUpdatedEvent, this.onBeatUpdated)
    this.el = document.createElement('div')
    this.el.className = 'app'

    this.firstHeader = new Header({text: 'DJ Control'})
    this.beatInput = new BeatInput({value: model.bpm})
    this.beatInput.addEventListener(BeatInput.inputEvent, this.onBeatInput)
    this.startButton = new StartStopButton()
    this.startButton.addEventListener(StartStopButton.startEvent, () => {
      this.controller.start()
    })
    this.startButton.addEventListener(StartStopButton.stopEvent, () => {
      this.controller.stop()
    })
    this.secondHeader = new Header({text: 'Visualizer'})
    this.pulsatingBar = new BeatBar({value: 70})
    this.beatDisplay = new BeatDisplay({value: model.bpm})

    this.el.appendChild(this.firstHeader.el)
    this.el.appendChild(this.beatInput.el)
    this.el.appendChild(this.startButton.el)
    this.el.appendChild(this.secondHeader.el)
    this.el.appendChild(this.pulsatingBar.el)
    this.el.appendChild(this.beatDisplay.el)
  }

  render(): void {
    this.firstHeader.render()
    this.beatInput.render()
    this.startButton.render()
    this.secondHeader.render()
    this.pulsatingBar.render()
    this.beatDisplay.render()
  }

  attachToDocument() {
    const rootEl = document.querySelector('.app')
    if (rootEl) {
      rootEl.remove()
    }
    this.render()
    document.body.appendChild(this.el)
  }

  toggleStartButton() {
    this.startButton.toggle()
  }

  private onBeatPlayed = () => {
    this.pulsatingBar.pulse()
  }

  private onBeatUpdated = () => {
    this.beatDisplay.props.value = this.model.bpm
    this.beatDisplay.render()
  }

  private onBeatInput = () => {
    this.controller.setBeatPerMinute(parseInt(this.beatInput.value, 10))
  }
}
