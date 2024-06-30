import React, {useState} from 'react'
import './index.css'

const Counter = () =>{

    const [count, setCount] = useState(0);
    
    return(

        
            <div className='container'>
                <h1 className='heading'>Counter</h1>
                <h1>{count}</h1>
                <div>
                    <button className='button' onClick={()=>setCount(count-1)}>Decrement</button>
                    <button onClick={()=>setCount(count+1)}>Increment</button>
                </div>
            </div>
                
        
    )
}

export default Counter