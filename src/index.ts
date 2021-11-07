import {Header} from './view/header/header'
import {BeatInput} from './view/beat-input/beat-input'
import {StartButton} from './view/start-button/start-button'
import {Progress} from './view/progress/progress'
import {BeatDisplay} from './view/beat-display/beat-display'

let rootEl = document.querySelector('.app')
if (rootEl) {
  rootEl.remove()
}
rootEl = document.createElement('div')
rootEl.className = 'app'
document.body.appendChild(rootEl)

const firstHeader = new Header({text: 'DJ Control'})
const beatInput = new BeatInput({value: 50})
const startButton = new StartButton({text: 'Start'})
const secondHeader = new Header({text: 'Visualizer'})
const pulsatingBar = new Progress({max: 100, value: 70})
const beatDisplay = new BeatDisplay({value: 120})

firstHeader.render()
rootEl.appendChild(firstHeader.el)
beatInput.render()
rootEl.appendChild(beatInput.el)
startButton.render()
rootEl.appendChild(startButton.el)
secondHeader.render()
rootEl.appendChild(secondHeader.el)
pulsatingBar.render()
rootEl.appendChild(pulsatingBar.el)
beatDisplay.render()
rootEl.appendChild(beatDisplay.el)

/*
 NOTE: This markup could be done like that:
 rootEl.innerHTML = `<h2>DJ Control</h2>
 <label>Enter BPM:<input type='number' value='120'></label>
 <button>Start</button>
 <h2>Visualizer</h2>
 <progress max='100' value='70'>70%</progress>
 <div>Current BPM: <strong>120</strong></div>
 `
*/
