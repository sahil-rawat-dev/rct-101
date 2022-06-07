import React from "react";

const Count=()=>{
   
    const [count, setCount]=React.useState(0);

   
    return (
        <div>
            <h1>counter App:{count}</h1>
            <button onClick={()=>setCount(count+1)}>increment</button>
            <button onClick={()=>{
                if(count>0){
                    setCount(count-1)
                }
            } 
        }>decriment</button>
        </div>
    )
}
export {Count}