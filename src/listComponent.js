import React from 'react';


const TodoItem = (props) =>  {
  return (
    <li style={{'listStyleType': 'none'}} className={'todoItem'}> 
      <button onClick={props.itemUpdate} className={'todoBtn'}></button> 
      <button onClick={props.itemUpdate} className={'todoBtnDone'}>&#10004;</button> 
      {props.item}
    </li>
  )
}

//always needs to be [export default _]
export default TodoItem