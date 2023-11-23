import React,{useEffect,useState} from "react";
import axios from "axios";
function Put(){
    const[name,setName]=useState("");
    const[id,setId]=useState("");
    const handleChange=(event)=>
    {
        setName(event.target.value);
    }
    const handleId=(event)=>
    {
        setId(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios
        .put(`http://localhost:3002/users/${id}`,{name})
        .then((res)=>
        {
            console.log(res.data);
        })
        .catch((err)=>
        {
            console.log("Error"+err);
        })
    };

return(
    <div>
        AxiosPut
        <ul>
            <form onSubmit={handleSubmit}>
                <input type="number"  onChange={handleId}></input>
                <input type="text" value={name} onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>
        </ul>
    </div>
)
}
export default Put;