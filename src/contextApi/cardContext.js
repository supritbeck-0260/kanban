import { createContext } from "react";

const CardContext = createContext({
    cardClickHandler:()=>{},
    task:[]
})

export default CardContext;