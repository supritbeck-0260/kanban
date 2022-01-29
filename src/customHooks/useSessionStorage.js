import { useState } from "react"
import { getSesstionItem, setSesstionItem } from "../webStorage/sessionStorage"


export const useSessionStorage = (key,initialValue)=>{
    const [value,setValue] = useState(getSesstionItem(key,initialValue))
    setSesstionItem(key,value);
    return [value,setValue];

}