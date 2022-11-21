import './App.css'
import { useState } from 'react';
import Lamp from './components/Lamp';



function App() {
  let [allOn, setAllOn] = useState(true)

  let texto = (allOn === true) ? "On" : "Off"

  let startAllOn = ()=> {
    if(allOn === true){
      setAllOn(false)
    
    }else{
      setAllOn(true)
    }
  }


  return (
    <div className="App">
      <Lamp startAllOn = {startAllOn}></Lamp>
      <Lamp startAllOn = {startAllOn}></Lamp>
      <Lamp startAllOn = {startAllOn}></Lamp>
      <button onClick={startAllOn}>{texto}</button>
    </div>
    
  )
}

export default App
