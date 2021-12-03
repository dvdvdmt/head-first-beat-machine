import {IView} from '../i-view'

interface IProps {
  value: number
  onInput(value: string): void
}

export class BeatInput implements IView {
  el: HTMLElement
  private props: IProps
  private inputEl: HTMLInputElement

  constructor(props: Partial<IProps>) {
    this.props = {value: 0, onInput() {}, ...props}
    this.el = document.createElement('label')
    this.el.innerText = 'Enter BPM: '
    this.inputEl = document.createElement('input')
    this.inputEl.type = 'number'
    this.inputEl.addEventListener('change', () => {
      this.props.onInput(this.inputEl.value)
    })
    this.el.appendChild(this.inputEl)
  }

  render(): void {
    this.inputEl.value = `${this.props.value}`
  }
}
