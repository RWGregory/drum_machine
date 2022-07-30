import React, { useEffect } from 'react'
import './App.css'

function Display({ bank, active, setActive}) {
  let pads = bank.map((pad) => {
    return <DrumPad trigger={pad.trigger} id={pad.id} source={pad.source} setActive={setActive} />
  })

  return <div id="drum-machine" className="container">
      <div id="display">{active}</div>
      {pads}
    </div>
}

function DrumPad({ id, trigger, source, setActive }) {
  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    
    return () => {
      document.removeEventListener('keydown', handleKey)
    }
  })

  const handleKey = (e) => {
    if (e.key.toUpperCase() === trigger) {
      playSound();
      
    }
  }

  const playSound = () => {
    const audio = document.getElementById(trigger)
    setActive(id)
    audio.load()
    audio.play()
  }

  return (
    <button className="drum-pad" onClick={playSound} id={id}>
      <audio className="clip" id={trigger} src={source} type="audio/wav" />
      {trigger}
    </button>
  )
}

export default Display
