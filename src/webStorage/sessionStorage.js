export const getSesstionItem = (key,initialValue)=>{
    const value =  sessionStorage.getItem(key)
    try {
        if(value) return JSON.parse(value)

        return initialValue
    } catch (error) {
      return null   
    }
    
}

export const setSesstionItem = (key,value)=>{
    if(key)sessionStorage.setItem(key,JSON.stringify(value));
}