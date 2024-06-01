import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
export function Product(){

    let [a,setval]=useState([])
    useEffect(()=>{
        fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products").
        then((res)=>res.json()).
        then((res)=>{setval(res.data)})
    },[])

    return(
        <>
        {
            a.map((v,i)=>{
                return(
                    <div key={i} style={{border:"1px solid black",marginTop:"25px"}}>
                        <Link to={`/product/${v.id}`}>
                            <div>
                                    <div>
                                        <img src={v.image} />
                                    </div>
                                    <h5>Brand:{v.brand}</h5>
                                    <h5>Title:{v.title}</h5>
                                    <h5>Category:{v.category}</h5>
                                    <h5>Price:{v.price}</h5>
                            </div>                    
                        </Link>
                    </div>
                )
            })
        }
        </>
    )
}