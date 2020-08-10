import React from 'react';


const ListComponent = (props) =>  {
  return (
    <li style={{'listStyleType': 'none'}}> 
      <button onClick={props.itemUpdate} className={'todoBtn'}>X</button> 
      {props.item}
    </li>
  )
}

//always needs to be [export default _]
export default ListComponent