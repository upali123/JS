//  USe Callback (memoization  fucntion)
//it returns memomized fucntion


import React, { useEffect, useState, useCallback } from "react"
import Table from "../components/table"

const UseCallbackCom = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)



    const cssStyle = {
        background: dark ? "black" : "white",
        color: dark ? "white" : "black"


    }
const calculateTable=useCallback((value)=>{
    const newNum = number+value
    return [newNum *1,newNum*2,newNum *3,newNum*4,newNum *5]
},
[number])

    
    
    return (
        <div style={cssStyle}>
            <h2>Use CallBack</h2>
            <input
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))} // Fix: Convert to number
            
            />

            <Table calculateTable={calculateTable}/>
            <button onClick={() => setDark((prev) => !prev)}>Toggle</button>
        </div>

    )
   
}



export default UseCallbackCom