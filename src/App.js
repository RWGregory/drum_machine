import React from 'react'
import './App.css'
import Display from './Display.js'

function App() {
  //const [padStyle, setPadStyle] = React.useState(false)
  const keyBindings = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
  const descriptions = [
    'Clap',
    'Ride',
    'Tom[Hi]',
    'Snare',
    'OpHat',
    'Kick',
    'Crash02',
    'Cabasa',
    'Tom[Lo]',
  ]

  class Sample {
    constructor(key, description) {
      this.trigger = key
      this.id = description
      this.source = `../public/audio/${description}.wav`
    }
  }

  const bank = keyBindings.map(
    (key, index) => new Sample(key, descriptions[index]),
  )

  return (
    <main>
      <div id="drum-machine">
        <Display bank={bank} />
      </div>
    </main>
  )
}

export default App

//<Display padStyle={padStyle} setPadStyle={setPadStyle} bank={bank} />
