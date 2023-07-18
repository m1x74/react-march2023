import React, {useContext} from 'react';
import {Context} from "../../../App";

const SubChild2_2 = () => {
  const {setData} = useContext(Context)
    return (
        <div>
            <button onClick={()=>setData(prev=>[...prev,7])}>ADD 7</button>

        </div>
    );
};

export default SubChild2_2;