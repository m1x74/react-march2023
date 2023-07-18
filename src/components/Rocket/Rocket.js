import React from 'react';

const Rocket = ({rocket}) => {
    const{mission_name,launch_year,links:{mission_patch_small}}=rocket
    return (
        <div>
            {mission_name} -- {launch_year}
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default Rocket;