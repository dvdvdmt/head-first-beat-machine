import {IView} from '../i-view'

interface IProps {
  text: string
}

export class Header implements IView {
  el: HTMLElement
  private props: IProps

  constructor(props: IProps) {
    this.el = document.createElement('h2')
    this.props = props
  }

  render(): void {
    this.el.innerText = this.props.text
  }
}
