import {IView} from '../i-view'

interface IProps {
  text: string
}

export class StartStopButton extends EventTarget implements IView {
  static readonly stopText = 'Stop'
  static readonly startText = 'Start'
  static readonly startEvent = 'start'
  static readonly stopEvent = 'stop'
  el: HTMLElement
  private props: IProps

  constructor() {
    super()
    this.props = {text: StartStopButton.startText}
    this.el = document.createElement('button')
    this.el.addEventListener('click', this.onClick)
  }

  private get isStart() {
    return this.props.text === StartStopButton.startText
  }

  render(): void {
    this.el.innerText = this.props.text
  }

  onClick = () => {
    if (this.isStart) {
      this.dispatchEvent(new Event(StartStopButton.startEvent))
    } else {
      this.dispatchEvent(new Event(StartStopButton.stopEvent))
    }
  }

  toggle(): void {
    if (this.isStart) {
      this.props.text = StartStopButton.stopText
    } else {
      this.props.text = StartStopButton.startText
    }
    this.render()
  }
}
