import Child1 from "./components/Child1/Child1";
import Child2 from "./components/Child2/Child2";
import {createContext, useState} from "react";
const Context=createContext(null);

function App() {
    const [data,setData]=useState([1,2,3])

    return(
    <Context.Provider value={{setData,data}}>
        <div>
            <Child1/>
            <hr/>
            <Child2/>
        </div>
    </Context.Provider>

)
}

export {App,Context};
