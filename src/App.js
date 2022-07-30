import React from 'react'
import './App.css'
import Display from './Display.js'

import Cabasa from './audio/Cabasa.wav'
import Clap from './audio/Clap.wav'
import ClHat from './audio/ClHat.wav'
import Crash02 from './audio/Crash02.wav'
import Kick from './audio/Kick.wav'
import OpHat from './audio/OpHat.wav'
import Snare from './audio/Snare.wav'
import TomHi from './audio/Tom[Hi].wav'
import TomLo from './audio/Tom[Lo].wav'

function App() {
  const [active, setActive] = React.useState('')
  const keyBindings = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
  const descriptions = [
    'Clap',
    'ClHat',
    'TomHi',
    'Snare',
    'OpHat',
    'Kick',
    'Crash',
    'Cabasa',
    'TomLo',
  ]
  const sources = [
    Clap,
    ClHat,
    TomHi,
    Snare,
    OpHat,
    Kick,
    Crash02,
    Cabasa,
    TomLo,
  ]

  class Sample {
    constructor(key, description, source) {
      this.trigger = key
      this.id = description
      this.source = source
    }
  }

  const bank = keyBindings.map(
    (key, index) => new Sample(key, descriptions[index], sources[index]),
  )

  return (
    <main>
      <div >
        <Display bank={bank} active={active} setActive={setActive} />
      </div>
    </main>
  )
}

export default App

//<Display padStyle={padStyle} setPadStyle={setPadStyle} bank={bank} />
