import {AppView} from './view/app-view'

let rootEl = document.querySelector('.app')
if (rootEl) {
  rootEl.remove()
}
const app = new AppView()
app.render()
document.body.appendChild(app.el)
