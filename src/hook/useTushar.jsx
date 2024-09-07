import React,{useState,useEffect} from 'react'


const useTushar = (key,initialvalue) => {

    const [name,setname] = useState(
        localStorage.getItem(key)?
        localStorage.getItem(key):initialvalue
      );
      
      useEffect(()=>{
        localStorage.setItem(key,name)
      },[name,key])

  return [name,setname]
}

export default useTushar