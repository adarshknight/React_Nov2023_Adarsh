import React,{useEffect,useState} from "react";
import axios from "axios";
function Delete(){
    //const[name,setName]=useState("");
    const[id,setId]=useState("");
    const handleId=(event)=>
    {
        setId(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios
        .delete(`http://localhost:3002/users/${id}`)
        .then((res)=>
        {
            console.log(res.data);
            console.log(`Deleted ID:${id}`);
        })
        .catch((err)=>
        {
            console.log("Error"+err);
        })
    };

return(
    <div>
        AxiosDelete
        <ul>
            <form onSubmit={handleSubmit}>
                <input type="number"  onChange={handleId}></input>
                <button type="submit">Submit</button>
            </form>
        </ul>
    </div>
)
}
export default Delete;