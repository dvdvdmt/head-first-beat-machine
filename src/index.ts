import {AppView} from './view/app-view'
import {BeatModel} from './beat-model'

if (module.hot) {
  module.hot.dispose(() => {
    window.location.reload()
  })
}

let rootEl = document.querySelector('.app')
if (rootEl) {
  rootEl.remove()
}

const model = new BeatModel(80)
const app = new AppView(model)
app.render()
document.body.appendChild(app.el)
model.run()
