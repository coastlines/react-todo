import React from 'react';


const TodoItem = (props) =>  {
  return (
    <li style={{'listStyleType': 'none'}} className={'todoItem'}> 
      <button 
        onClick={props.itemUpdate} 
        className={props.btnClass}>
        {props.btnText}
      </button> 
      {/* <button onClick={props.itemUpdate} className={'todoBtnDone'}></button>  */}
      <span className={props.listClass}>{props.item}</span>
    </li>
  )
}

//always needs to be [export default _]
export default TodoItem