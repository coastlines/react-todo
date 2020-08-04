import React from 'react';

function FirstComponent(props) {
  console.log('This is First Comp Props', props.items)
  return (
      // eslint-disable-next-line react/react-in-jsx-scope
    <div>
      <ul>
        {props.items.map((item, index) => {
        return <li key={index}>{props.items[index]}</li>
        })}  
      </ul>
    </div>
  )
}
   
//always needs to be [export default _]
export default FirstComponent