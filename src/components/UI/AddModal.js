import React,{useState, useContext} from 'react';

import { UserContext } from '../../App';
import Card from './Card';
import Button from './Button';
import classes from './Modal.module.css';
import axios from 'axios';

const AddModal = (props) => {
    const [catagory, setCatagory] = useState('');
    const [success, setSuccess] = useState('');
    const [response, setResponse] = useState('');
   
    const {data, setData} = useContext(UserContext)

    const setCatHandler = (e) => {
      setCatagory(e.target.value);
       console.log(typeof(catagory))
    }
    const addUserHandler = (event) => {
        event.preventDefault();
        if (catagory.trim().length === 0) {
          return;
        }
        //useEffect(() => {
          const Url = `https://localhost:7093/api/Category/CategoryName/${catagory}`
          const Add_Url = `https://localhost:7093/api/Category/Add`
          
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
          console.log(response.data.message);
          setSuccess(response.data.success)
          //setData(response.data.data);
          });
        if(success){
          const data = {
            categoryName : catagory
          }
          
          axios.post(Add_Url, data, {
            headers: {
              'Authorization': `Basic ${token}`
            },
          })
          
          setCatagory('');
        props.onState(false);
        }
    };
    const closeModal = () => {
      props.onState(true);
    }
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}> 
          <h2>Add Catagory</h2>
        </header>
        <div className={classes.content}>
          <label htmlFor="catName">Enter catagory name :</label>
          <input type="text" onChange={setCatHandler} value={catagory} />
          {success &&<p>category already exists</p>}
        </div>
        <footer className={classes.actions}>
          <Button onClick={closeModal}>Close</Button>
          <Button onClick={addUserHandler}>Add</Button>
        </footer>
      </Card>
    </div>
  );
};

export default AddModal;

