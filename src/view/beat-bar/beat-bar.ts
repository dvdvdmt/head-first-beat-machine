import {IView} from '../i-view'

interface IProps {
  value: number
}

export class BeatBar implements IView {
  el: HTMLProgressElement
  private props: IProps

  constructor(props: IProps) {
    this.props = props
    this.el = document.createElement('progress')
    this.el.max = 100
  }

  render(): void {
    this.el.value = this.props.value
  }

  pulse(): void {
    this.props.value = this.el.max
    this.animatePulse()
  }

  private animatePulse() {
    this.render()
    this.props.value *= 0.75
    if (this.props.value > 1) {
      requestAnimationFrame(() => {
        this.animatePulse()
      })
    }
  }
}
