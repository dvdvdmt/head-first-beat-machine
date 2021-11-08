import {IView} from './i-view'
import {Header} from './header/header'
import {BeatInput} from './beat-input/beat-input'
import {StartButton} from './start-button/start-button'
import {BeatBar} from './beat-bar/beat-bar'
import {BeatDisplay} from './beat-display/beat-display'
import {BeatModel, BeatModelEvent} from '../beat-model'

export class AppView implements IView {
  el: HTMLElement
  private firstHeader: Header
  private beatInput: BeatInput
  private startButton: StartButton
  private secondHeader: Header
  private pulsatingBar: BeatBar
  private beatDisplay: BeatDisplay
  private model: BeatModel

  constructor(model: BeatModel) {
    this.model = model
    this.model.addEventListener(BeatModelEvent.BeatPlayed, () => {
      this.pulsatingBar.pulse()
    })
    this.el = document.createElement('div')
    this.el.className = 'app'

    this.firstHeader = new Header({text: 'DJ Control'})
    this.beatInput = new BeatInput({value: 50})
    this.startButton = new StartButton({text: 'Start'})
    this.secondHeader = new Header({text: 'Visualizer'})
    this.pulsatingBar = new BeatBar({value: 70})
    this.beatDisplay = new BeatDisplay({value: 120})

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
}
