import {IView} from '../i-view'

interface IProps {
  text: string
}

export class StartButton implements IView {
  el: HTMLElement
  private props: IProps

  constructor(props: IProps) {
    this.props = props
    this.el = document.createElement('button')
  }

  render(): void {
    this.el.innerText = this.props.text
  }
}
