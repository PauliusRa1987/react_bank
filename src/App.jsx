import "./bootstrap.css";
import "./App.css";
import FirstPage from "./Components/FirstPage";
import Login from "./Components/Login";
import axios from "axios";
import { useState, useEffect  } from "react";
import { authConfig } from "./Functions/auth";


function App() {

  const [user, setUser] = useState(null);
  const [refresh, setRefresh] = useState(true);
  const [logMsg, setLogMsg] = useState(true);

  useEffect(() => {
    axios.get('http://bankas.lt/loginAuth', authConfig())
        .then(res => {
            if (res.data.user) {
              setUser(res.data.user); 
            } 
            else{ 
              setLogMsg(res.data.msg);
            setUser(null);
          }
         });
  }, [refresh]);

  return (
    
      <div className="container">
        <div className="row">
        {
          user ? <FirstPage setRefresh={setRefresh}/> : <Login logMsg={logMsg} setRefresh={setRefresh}/>
        }
        </div>
      </div>

  );
}

export default App;
