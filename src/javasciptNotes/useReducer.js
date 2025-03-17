import React, { useReducer } from "react"

//Use reducer is used to avoid multiple states ina component
const initialState = {count:0}


const reducer=(state,action)=>{

    switch (action.type) {
        case "increase":
            return {count :state.count +1}

    
            case "decrease":
            return {count :state.count -1}
            default:
                return state

    }
}
const UseReducerComp=()=>{

 
const [state,dispatch] = useReducer(reducer,initialState)


const handleClickIncrease=()=>{
    dispatch({type:"increase"})
}
const handleClickDecrease=()=>{
    dispatch({type:"decrease"})
}
    return(
        <div>

            <h2>USE REDUCER</h2>
<p>Count:{state.count}</p>
<button onClick={handleClickIncrease}>Increase</button>
<button onClick={handleClickDecrease}>Decrease</button>


        </div>
    )
}

export default UseReducerComp