import React,{useState} from 'react'
import './TableRow.css'
import EditModal from './UI/EditModal'
import DeleteModal from './UI/DeleteModal'


const TableRow = (props) => {
  const [edit, setEdit] = useState(false)
  const [ondelete, setOnDelete] = useState(false)
  
  const onEdit = () =>{
    setEdit(true);
  }
  const onDelete = () =>{
    setOnDelete(true);
  }
  return (
    <div>
      {edit && <EditModal onEdit={setEdit} value={props.cat} sl={props.sl} rowId={props.rowId}/>}
      {ondelete && <DeleteModal onDelete={setOnDelete} value={props.cat} sl={props.sl} rowId={props.rowId}/>}
      <li className="table-row" >
        <div className="col" >{props.sl}</div>
        <div className="col" >{props.cat}</div>
        <div className="col" >
          <i className="fa-solid fa-pen-to-square" onClick={onEdit}></i> 
          <i className="fa-solid fa-trash" onClick={onDelete}></i>
        </div>
       </li>
    </div>
    

  )
}
export default TableRow;
