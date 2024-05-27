import { useState } from "react";

function Counter()
{
    const [increasedcounter,setIncreaseCount] = useState(10)
    const [decreasedcounter,setDecreaseCount] = useState(10)
    const IncreaseCounter = () => {
        setIncreaseCount(increasedcounter+1);
    }
    
    const DecreaseCounter = () => {
        setDecreaseCount(decreasedcounter-1);
    }
    return (<>
    <button onClick={IncreaseCounter}>Increase counter</button>
    <p>Increased counter {increasedcounter}</p>
    <button onClick={DecreaseCounter}>Decrease counter</button>
    <p>Decreased counter {decreasedcounter}</p>    
    </>
    )
}

export default Counter