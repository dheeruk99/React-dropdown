import { useState } from "react";
import Dropdown from "./Dropdown";

function App() {
  const [visible,setvisible] = useState(false);
  
  const hide=()=>{
    setvisible('false');
  }
  const show=()=>{
    setvisible('true');
  }

  return (

    <div className="App">
      <h3>Should you use a dropdown?</h3>
      {visible ? (
      
      
      <div></div>
      ) : (
      <div className="defaultState" onMouseEnter={show}>Select <i class="fa-solid fa-angle-down"></i></div>
      
      )}
      
    </div>
  );
}

export default App;
