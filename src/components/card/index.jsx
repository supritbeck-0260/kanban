import React from 'react';
import { useTask } from '../mainContainer';

export default function Card({data}) {
    const [,cardClickHander] = useTask();
    const {title,desc,date,status} = data ?? {};
  return(
      <>
        <div className="row mx-0 card m-2 pointer" onClick={()=>cardClickHander(data)}>
            <div className="col-12">
                title: {title}
            </div>
            <div className="col-12">
                Discription: {desc}
            </div>
            <div className="col-12">
                date: {date.toLocaleString()}
            </div>
            <div className="col-12">
               status: {status}
            </div>
        </div>
      </>
  );
}
