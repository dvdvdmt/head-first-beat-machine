import {IView} from '../i-view'

interface IProps {
  enabled: boolean
  disableText: string
  enableText: string
  onEnable(): void
  onDisable(): void
}

export class ToggleButton implements IView {
  el: HTMLElement
  props: IProps

  constructor(props: Partial<IProps> = {}) {
    this.props = {
      enabled: false,
      enableText: 'On',
      disableText: 'Off',
      onEnable() {},
      onDisable() {},
      ...props,
    }
    this.el = document.createElement('button')
    this.el.addEventListener('click', this.onClick)
  }

  render(): void {
    this.el.innerText = this.props.enabled ? this.props.disableText : this.props.enableText
  }

  onClick = () => {
    if (this.props.enabled) {
      this.props.onDisable()
    } else {
      this.props.onEnable()
    }
  }
}
