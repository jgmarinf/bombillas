import React, {useState, useEffect} from 'react'

const Lamp = ({startAllOn}) => {

    let [On, setOn] = useState(true)

    useEffect(() => {
      startAllOn = true ? setOn(!On) : null
    

    }, [startAllOn])
    

    
    let text = (On === true ) ? "On" : "Off"

    
    let startOn = ()=> {
        if(On === true){
            setOn(false)
            
        }else {
            setOn(true)
            
        }
    }
   
  return (
    <div className={`Lamp${text}`}>
        <button onClick={startOn}>{text}</button>
    </div>
  )
}

export default Lamp