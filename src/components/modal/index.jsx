import React from 'react';
import { useState } from 'react/cjs/react.development';
import './modal.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
export default function Modal({data,updateData,close}) {
    const [title,setTitle] = useState(data.title);
    const [desc,setDesc] = useState(data.desc);
    const [date,setDate] = useState(new Date(data.date));
    const [status,setStatus] = useState(data.status);
    const saveHandler = ()=>{
        updateData({
            id:data.id,
            title,
            desc,
            date,
            status
        })
    }
  return(
      <>
        <div className="custom-modal">
            <div className="container p-4 row">
                <div className="col-12 p-3">
                <input type="text" placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
               
                <div className="col-12 p-3">
                <input type="text" placeholder='description' value={desc} onChange={(e)=>setDesc(e.target.value)}/>
                </div>
              
                {/* <input type="date" placeholder='date' date={date} onChange={(e)=>setDate(e.target.value)}/> */}
                <div className="col-12 p-3">
                <DatePicker selected={date} onChange={(date) => setDate(date)} />
                </div>
               
                <div className="col-12 p-3">
                <select value={status} onChange={(e)=>setStatus(e.target.value)} >
                    <option value="backlog"> Backlog</option>
                    <option value="inprogress">In Progress</option>
                    <option value="done">Done</option>
                </select>
                </div>
              
                <div className="row d-flex w-100 justify-content-around">
                <button className="btn m-2" onClick={saveHandler}>Save</button>
                <button className="btn m-2" onClick={close}>Close</button>
                </div>
            </div>
        </div>
      </>
  );
}
