import React, { useEffect, useRef, useState } from "react"

const UseRef=()=>{

    // UseRef is used to access DOM elements and to get mutable variables without rerenders.
    const [value,setValue]=useState("")
const count = useRef(0)
const input=useRef()
// const[count,setCount]=useState(0)
useEffect(()=>{
     count.current = count.current+1
    //  setCount(prev => prev+1)
})
const handleClick=()=>{
    input.current.style.width = "50%"
    input.current.focus() 

}

    return(
        <div>
                        <h2>USE REF</h2>

<input value={value} onChange={(e)=>setValue(e?.target.value)} ref={input} />

<button onClick={handleClick}>Click Me</button>
<p>value:{value}</p>
<p>count:{count.current}</p>
        </div>
    )
}

export default UseRef