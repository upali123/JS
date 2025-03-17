import React, { useContext }  from "react";
import { userData } from "../App";

//useContext is used to manage state globally to avoid pasing props from parent to child component
const ContextData=()=>{
    const [data]=useContext(userData)

    return(
<div>
    <p>name {data?.name}
    </p>
age {data?.age}</div>

    )
}

export default ContextData