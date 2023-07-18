import UsersComponent from "./components/UsersComponent/UsersComponent";
import {useState} from "react";
import Posts from "./components/Posts/Posts";

function App() {
const [userId,setUserId]=useState(null)
return(

 <div>
     {userId&&<Posts userId={userId}/>}
     <hr/>
  <UsersComponent setUserId={setUserId}/>
 </div>
)

}

export default App;
