import React, { useState } from 'react'
import './App.css';
import ColorBlock from './components/ColorForm/ColorBlock.js'
import ColorForm from './components/ColorForm/ColorForm.js'

function App(){
     const [colors,setColors]  = useState([
      'violet', 'blue',
      'lightblue', 'green',
      'greenyellow', 'yellow',
      'orange', 'red'
  ])
  function addColor (value) {
    setColors((prev) => [...prev,value ])
  }
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock key={i} color={color} />
        )
    })

    return (
        <div className="App">
            {colorMap}
            <ColorForm addColor={addColor} />
        </div>
    )
}



export default App;