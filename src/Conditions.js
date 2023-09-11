import React, { useState } from 'react'

const Conditions = () => {
    const [current, setCurrent] = useState(false);

//     return current ? (<div><h2>Hello there!</h2></div>) : (<div><h2>Nothing to see there!</h2></div>      // (Ternary)
//   )

    let output;

    if(current){
        output = <h2>Hi there!</h2>
    }
    else{
       output = <h2>Nothing to see there!</h2>
    }
  return (
    <div>
        {output}
    </div>
  )
}

export default Conditions