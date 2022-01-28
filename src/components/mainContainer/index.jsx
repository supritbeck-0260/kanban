import React , {useState} from 'react';
import CardContainer from '../cardContainer';
import Modal from '../modal';
import tasksData from '../../data';
export default function MainContainer() {
  const [task,setTask] = useState(tasksData);
  const [data,setData] = useState(null);
  const cardClickHander =(data)=>{
    setData(data)
  }
  const updateData  =(data)=>{
    setTask(prev=>{
      const index = prev.findIndex(elem=>elem.id == data.id);
      if(index == '-1') return prev;
      prev[index] = data;
      return prev
    })
    setData(null)
  }
  return (
  <>
  <div className="row mx-0">
      <CardContainer type="backlog" task={task} cardClickHander={cardClickHander}/>
      <CardContainer type="inprogress"  task={task} cardClickHander={cardClickHander}/>
      <CardContainer type="done"  task={task} cardClickHander={cardClickHander}/>
</div>
{data && <Modal close={()=>setData(null)} data={data} updateData={updateData}/>}
  </>);
}
