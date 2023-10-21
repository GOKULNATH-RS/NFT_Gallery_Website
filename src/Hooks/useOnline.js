import { useState , useEffect } from 'react';

const useOnline =() => {

    const [onlineStatus,setOnlineStatus] = useState(true);

    const handleOnline = () =>{
        setOnlineStatus(true);
    }
    const handleOffline = () =>{
        setOnlineStatus(false);
    }


    useEffect(()=>{

        window.addEventListener("online" , handleOnline)
        
        window.addEventListener("offline" ,handleOffline)

        return()=>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        }

    },[])

    return onlineStatus;
}

export default useOnline