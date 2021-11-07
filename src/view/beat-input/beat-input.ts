import {IView} from '../i-view'

interface IProps {
  value: number
}

export class BeatInput implements IView {
  el: HTMLElement
  private inputEl: HTMLInputElement
  private props: IProps

  constructor(props: IProps) {
    this.props = props
    this.el = document.createElement('label')
    this.el.innerText = 'Enter BPM: '
    this.inputEl = document.createElement('input')
    this.inputEl.type = 'number'
    this.el.appendChild(this.inputEl)
  }

  render(): void {
    this.inputEl.value = `${this.props.value || 0}`
  }
}
