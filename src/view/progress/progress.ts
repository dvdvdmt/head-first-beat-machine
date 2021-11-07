import {IView} from '../i-view'

interface IProps {
  max: number
  value: number
}

export class Progress implements IView {
  el: HTMLProgressElement
  private props: IProps

  constructor(props: IProps) {
    this.props = props
    this.el = document.createElement('progress')
  }

  render(): void {
    this.el.max = this.props.max
    this.el.value = this.props.value
  }
}
