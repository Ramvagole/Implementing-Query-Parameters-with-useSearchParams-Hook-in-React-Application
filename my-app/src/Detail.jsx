import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
export function Detail(){
    let [b,setval]=useState({})
    let f=useParams()
    useEffect(()=>{
        fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${f.id}`).
        then((res)=>res.json()).
        then((res)=>{setval(res.data)})
    })
    return(
        <>
        <div>
            <div>
                <img src={b.image} />
            </div>
            <h5>Brand:{b.brand}</h5>
            <h5>Title:{b.title}</h5>
            <h5>Category:{b.category}</h5>
            <h5>Price:{b.price}</h5>
        </div> 
        </>
    )
}