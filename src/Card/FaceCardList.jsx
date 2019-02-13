import React from 'react'
import FaceCardDetails from './FaceCardDetails';

const FaceCardList = ({data}) => {
    // console.log(data[0].id);
   return (
    <div>
        {data.map((item, i) => (
          <FaceCardDetails  key={item.id} data={item}/>
        ))}
    </div>
  )
}

export default FaceCardList;
