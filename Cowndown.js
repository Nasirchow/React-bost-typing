import React from 'react';
import Digit from './digit/Digit'


function Cowndown(props) {
    return (     <div className="d-flex my-4">
                     <Digit color= "palegreen" value= { props.time.min } />
                     <Digit color="skyblue" value= {props.time.sec} />
             </div>

    )
        
    
    
        
    
}


export default Cowndown