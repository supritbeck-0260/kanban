import React , {lazy, Suspense, useState} from 'react';
import CardContainer from '../cardContainer';
import tasksData from '../../data';
import './mainContainer.css';
import { keys, STORAGE } from '../../data/keys';
import { useSessionStorage } from '../../customHooks/useSessionStorage';
export default function MainContainer() {
  const [task,setTask] = useSessionStorage(STORAGE,tasksData);
  const [data,setData] = useState(null);
  const Modal = lazy(()=>import(/* webpackChunkName:"Modal"*/'../modal'))
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
    {
      keys.map((elem)=><CardContainer key={elem} type={elem} task={task} cardClickHander={cardClickHander}/>)
    }
     
</div>
{data && 
<Suspense fallback={<div className='fallback'>Loading...</div>}>
<Modal close={()=>setData(null)} data={data} updateData={updateData}/>
</Suspense>
}
  </>);
}
