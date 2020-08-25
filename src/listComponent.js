import React from 'react';


const TodoItem = (props) =>  {
  return (
    <li style={{'listStyleType': 'none'}} className={'todoItem'}> 
      <button
        onClick={index => props.itemUpdate(index)}
        className={props.btnClass} 
      >
        {props.btnText}
      </button> 
      {/* <button onClick={props.itemUpdate} className={'todoBtnDone'}></button>  */}
      <span className={props.listClass}>{props.item}</span>
      <button id={'deleteBtn'}
        onClick={index => props.itemDelete(index)}
      >
        &#10005;
      </button> 
    </li>
  )
}

//always needs to be [export default _]
export default TodoItem