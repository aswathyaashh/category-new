import React, { useState, useEffect,createContext } from 'react'
import './App.css';
import Data from './components/Data.json';
import Header from './components/Header';
import Table from './components/Table';
// import Modal from './components/UI/Modal'
import axios from 'axios'

export const UserContext = createContext();

function App() {
  const [data, setData] = useState(Data);
  useEffect(() => {
    const Url = "https://localhost:7093/api/Category"
    //const refreshList = () => {
    let token = localStorage.getItem("token");
    axios({
    url: Url ,
    method: "get",
    headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
    },
    }).then(function (response) {
    //console.log(response.data.data);
    setData(response.data.data);
    });
},[]);
  return (
    <div className="App">
      <UserContext.Provider value={{data,setData}}>
          <Header />
          {/* <Modal/> */}
          <Table/>
        </UserContext.Provider> 

      

    </div>
  );
}

export default App;
