//  USe Memo (memoization ) ,it used to calculate expensive functions and avoid re renders
//it returns memomized value


import React, {  useMemo, useState } from "react"

const UseMemo = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)



    const cssStyle = {
        background: dark ? "black" : "white",
        color: dark ? "white" : "black"


    }

        const memValue = useMemo(()=>{
            return UseMemoFunc(number)
        }, [number])
    
    //without useMemo
    // const memValue =  UseMemoFunc(number)
    
    return (
        <div style={cssStyle}>
            <h2>Use Memo</h2>
            <input
            type="number"
            value={number}
            onChange={(e)=>setNumber(e.target.value)}
            
            />
            <p>Memoization Value:{memValue}</p>
            <button onClick={()=>setDark(!dark)}>toggle</button>
        </div>

    )
   
}

function UseMemoFunc(number) {
    for (let index = 0; index < 100000000; index++) {}
        return number

    
}

export default UseMemo