import {IView} from '../i-view'

interface IProps {
  value: number
}

export class BeatInput extends EventTarget implements IView {
  static readonly inputEvent = 'inputEvent'
  el: HTMLElement
  private inputEl: HTMLInputElement
  private props: IProps

  constructor(props: IProps) {
    super()
    this.props = props
    this.el = document.createElement('label')
    this.el.innerText = 'Enter BPM: '
    this.inputEl = document.createElement('input')
    this.inputEl.type = 'number'
    this.inputEl.addEventListener('change', () => {
      this.dispatchEvent(new Event(BeatInput.inputEvent))
    })
    this.el.appendChild(this.inputEl)
  }

  get value(): string {
    return this.inputEl.value
  }

  render(): void {
    this.inputEl.value = `${this.props.value || 0}`
  }
}
