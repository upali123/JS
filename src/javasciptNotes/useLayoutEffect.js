import React, { useEffect, useLayoutEffect, useRef, useState } from "react";


//UseLayoutEffect is same as useEffect but the only difference it runs before DOM elements prints in the browser.
const UseLayoutEffect=()=>{
const [ toggle,setToggle]=useState(false)
    const textRef=useRef()

    useEffect(()=>{
        if(textRef.current !=null){
const dimension =textRef.current.getBoundingClientRect()

textRef.current.style.paddingTop = `${dimension.height}px`

console.log(dimension)}
    },[toggle])

    //it removes the friction
    useLayoutEffect(()=>{
        if(textRef.current !=null){
const dimension =textRef.current.getBoundingClientRect()

textRef.current.style.paddingTop = `${dimension.height}px`

console.log(dimension)}
    },[toggle])
    return(
        <div>
                        <h2>USE LAYOUTEFFECT</h2>


<button onClick={()=>setToggle(!toggle)} >Toggle</button>
{toggle &&(
    <p ref={textRef}>Code will bless you </p>
)}
        </div>
    )
}

export default UseLayoutEffect