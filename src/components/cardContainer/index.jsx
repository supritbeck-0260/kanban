import React from 'react';
import Card from '../card';

export default function CardContainer({type,task,cardClickHander}) {
  return(
      <>
      <div className="col-4">
      <div className="row mx-0 p-3">
        <div className='h3 bg-primary col-12'>{type}</div>
        <div className="col-12">
        {
            task.filter((elem)=>elem.status == type).map(elem=><Card key={elem.id} data={elem} cardClickHander={cardClickHander}/>)
          }
        </div>
      </div>
      </div>
      </>
  );
}
