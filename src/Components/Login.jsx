import axios from "axios";
import { useState, useEffect  } from "react";
import { authConfig, login } from "../Functions/auth";

function Login({setRefresh, logMsg}) {

  const [loginData, setLoginData] = useState(null);
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

  const log = () => {
    setLoginData({name, pass})
    
  }

  useEffect(() => {
    if (loginData === null) return;
    axios.post('http://bankas.lt/loginApp', loginData, authConfig())
    .then(res => {
      if (res.data.token) {
        login(res.data.token);
        // console.log(res.data.token)
        setRefresh(r => !r);
    }
        // console.log(res.data)
    });
}, [loginData, setRefresh])

  return (
    <>
    <div className="main">
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          value={name} onChange={e => setName(e.target.value)}
        />
        <small className="form-text text-muted">Please enter your name</small>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" value={pass} onChange={e => setPass(e.target.value)}/>
      </div>

      <button type="button" className="btn btn-primary" onClick={log}>
        Login
      </button>
      {/* <h6 className="bad">{logMsg}</h6> */}
      </div>
      
    </>
  );
}
export default Login;
