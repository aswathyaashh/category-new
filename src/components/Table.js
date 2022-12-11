import React from 'react'
import TableRow from './TableRow'
import { useContext } from "react";
import { UserContext } from '../App'

import './Table.css'

const Table = () => {
  const {data} = useContext(UserContext)
  
  return (
    <div className="user-table">
            <li className="table-header">
                <div className="col">SL NO</div>
                <div className="col">Catagory</div>
                <div className="col">Actions</div>
            </li>
            { 

                data && data.map((cat,id)=>{
                    // console.log(user.name)                  
                   return <TableRow 
                      key={id}
                      sl={cat.categoryId}
                      cat={cat.categoryName}
                    /> 
                })}
                
            
        </div>

  )
}

export default Table