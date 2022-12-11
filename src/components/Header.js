import React,{useState} from 'react'
import './Header.css'
import Modal from './UI/AddModal'


const Header = (props) => {

  const [state, setState] = useState(false);
  const stateHandler = () => {
    state ? setState(false) : setState(true);
   
  }
 
  return (
    <div className='header'>
        {state && <Modal  onState ={stateHandler}/>}
        <h1>Catagories</h1>
        <div className='header-buttons'>
              {/* Search box */}
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search this blog" />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">
                <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          <div className='add-cat'>
            <button type="button" className="btn btn-primary" onClick={stateHandler} >
            <i className="fa-solid fa-plus"></i>
            Add Catagory
            </button>
          </div> 
          
         
        </div>
        
        

    </div>
  )
}

export default Header