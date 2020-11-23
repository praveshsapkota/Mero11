import React from 'react'
import './backDrop.css'

interface props {
    toggler : ()=> void ;
}


const BackDrop:React.FC<props> = ({toggler})=>{
    return (
        <div className="backDrop" onClick={toggler}>
            
        </div>
    )
}

export default BackDrop
