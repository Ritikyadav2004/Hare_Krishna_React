import { useState,useEffect } from "react";

function useCurrency(currency)
{   const [data,setData]=useState({});
    useEffect(()=>{
        
     fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
     .then((res)=>res.json())
     
     .then((res) => {
        console.log(data);
        setData(res[currency])

     })
    },[currency])
     

    // return [data,setData]    
    return data;
}

export default useCurrency; // i returned whole method so waha se data apan le lenge 