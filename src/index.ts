import {BeatController} from './beat-controller'

if (module.hot) {
  module.hot.dispose(() => {
    window.location.reload()
  })
}

new BeatController()
