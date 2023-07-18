import React, {useContext, useState} from 'react';
import {Context} from "../../../App";

const SubChild1_1 = () => {
    const {data} = useContext(Context);
    return (
        <div>
            {data.map(value=><div key={value}>{value}</div>)}
        </div>
    );
};

export default SubChild1_1;