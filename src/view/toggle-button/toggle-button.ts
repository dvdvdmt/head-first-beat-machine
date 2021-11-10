import {IView} from '../i-view'

interface IProps {
  enabled?: boolean
  disableText?: string
  enableText?: string
}

export class ToggleButton extends EventTarget implements IView {
  static readonly startEvent = 'start'
  static readonly stopEvent = 'stop'
  el: HTMLElement
  props: Required<IProps>

  constructor(props: IProps = {}) {
    super()
    this.props = {enabled: false, enableText: 'On', disableText: 'Off', ...props}
    this.el = document.createElement('button')
    this.el.addEventListener('click', this.onClick)
  }

  render(): void {
    this.el.innerText = this.props.enabled ? this.props.disableText : this.props.enableText
  }

  onClick = () => {
    if (this.props.enabled) {
      this.dispatchEvent(new Event(ToggleButton.stopEvent))
    } else {
      this.dispatchEvent(new Event(ToggleButton.startEvent))
    }
  }
}
