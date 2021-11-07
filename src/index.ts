let rootEl = document.querySelector('.app')
if (rootEl) {
  rootEl.remove()
}
rootEl = document.createElement('div')
rootEl.className = 'app'
document.body.appendChild(rootEl)

const headerEl = document.createElement('h2')
headerEl.innerText = 'DJ Control'

const beatInputEl = document.createElement('label')
beatInputEl.innerText = 'Enter BPM: '
const inputEl = document.createElement('input')
inputEl.type = 'number'
inputEl.value = '120'
beatInputEl.appendChild(inputEl)

const startButtonEl = document.createElement('button')
startButtonEl.innerText = 'Start'

const secondHeaderEl = document.createElement('h2')
secondHeaderEl.innerText = 'Visualizer'

const progressEl = document.createElement('progress')
progressEl.max = 100
progressEl.value = 70

const currentBeatValueEl = document.createElement('div')
currentBeatValueEl.innerText = 'Current BPM: '
const strongTextEl = document.createElement('strong')
strongTextEl.innerText = '120'
currentBeatValueEl.appendChild(strongTextEl)

rootEl.appendChild(headerEl)
rootEl.appendChild(beatInputEl)
rootEl.appendChild(startButtonEl)
rootEl.appendChild(secondHeaderEl)
rootEl.appendChild(progressEl)
rootEl.appendChild(currentBeatValueEl)

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
