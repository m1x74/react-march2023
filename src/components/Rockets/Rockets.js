import React, {useEffect, useState} from 'react';
import Rocket from "../Rocket/Rocket";

const Rockets = () => {
    const [rockets,setRockets]=useState([]);
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then((res)=>res.json())
            .then((rockets)=>setRockets((rockets)))
    },[])

    console.log(rockets)
    return (
        <div>
            {
                rockets.filter(rocket=>rocket.launch_year!=='2020').map((rockets)=><Rocket rocket={rockets}/>)
            }
        </div>
    );
};

export default Rockets;