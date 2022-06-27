import { useState, useEffect } from "react";
import "../bootstrap.css";
import "../App.css";
import axios from "axios";
import DataContext from "./DataContext";
import Create from "./Create";
import List from "./List";
import Add from "./Add";
import Remove from "./Remove";
import { authConfig } from "../Functions/auth";

function FirstPage({setRefresh}) {
  const [account, setAccount] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [modalCreate, setModalCreate] = useState(null);
  const [createAccount, setCreateAccount] = useState(null);
  const [deleteAccount, setDeleteAccount] = useState(null);

  const [modalAccount, setModalAccount] = useState(null);
  const [addToAccount, setAddToAccount] = useState(null);

  const [modalAccountRem, setModalAccountRem] = useState(null);
  const [remToAccount, setRemToAccount] = useState(null);

  const [message, setMessage] = useState(null);
  const [messageCreate, setMessageCreate] = useState(null);
  const [styleCreate, setStyleCreate] = useState(null);
  const [styleCreateList, setStyleCreateList] = useState(null);

  useEffect(() => {
    axios.get("http://bankas.lt/listJson", authConfig())
    .then((res) => setAccount(res.data));
  }, [lastUpdate]);
  

  useEffect(() => {
    if(null === createAccount) return;
    axios.post("http://bankas.lt/listJson", createAccount, authConfig())
      .then(res => {
        setMessageCreate(res.data.msg);
        setStyleCreate(res.data.style);
        setLastUpdate(Date.now());
      } );
  }, [createAccount]);

  useEffect(() => {
    if(null === deleteAccount) return;
    axios.delete("http://bankas.lt/listJson/" + deleteAccount.client, authConfig())
      .then(res => {
        setMessage(res.data.msg);
        setStyleCreateList(res.data.style);
        setLastUpdate(Date.now())
      } );
  }, [deleteAccount]);

  useEffect(() => {
    if(null === addToAccount) return;
    axios.put("http://bankas.lt/listJson/" + addToAccount.id, addToAccount, authConfig())
      .then(res => {
        setMessage(res.data.msg);
        setStyleCreateList(res.data.style);
        setLastUpdate(Date.now());
      } );
  }, [addToAccount]);

  useEffect(() => {
    if(null === remToAccount) return;
    axios.put("http://bankas.lt/listJsonRem/" + remToAccount.id, remToAccount, authConfig())
      .then(res => {
  
        setMessage(res.data.msg);
        setStyleCreateList(res.data.style);
        setLastUpdate(Date.now())
      } );
  }, [remToAccount]);



  return (
    <DataContext.Provider value={
      { account,
        createAccount, 
      setCreateAccount,
      setDeleteAccount,
      modalAccount,
      setModalAccount,
      setAddToAccount,
      modalAccountRem,
      setModalAccountRem,
      setRemToAccount,
      message,
      messageCreate,
      setMessage,
      setMessageCreate,
      styleCreate,
      styleCreateList,
      modalCreate, setModalCreate
      }
      }>
      <div className="container">
        <div className="row">
        
          <Create />
          <List setRefresh={setRefresh}/>
        </div>
      </div>
      <Add/>
      <Remove/>
    </DataContext.Provider>
  );
}

export default FirstPage;
