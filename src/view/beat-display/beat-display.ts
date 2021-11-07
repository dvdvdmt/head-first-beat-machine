import {IView} from '../i-view'

interface IProps {
  value: number
}

export class BeatDisplay implements IView {
  el: HTMLElement
  private props: IProps
  private valueEl: HTMLElement

  constructor(props: IProps) {
    this.props = props
    this.el = document.createElement('div')
    this.el.innerText = 'Current BPM: '
    this.valueEl = document.createElement('strong')
    this.el.appendChild(this.valueEl)
  }

  render(): void {
    this.valueEl.innerText = `${this.props.value}`
  }
}
