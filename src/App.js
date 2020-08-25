import React, {Component} from 'react'; // without component you need to use React.Component
import './App.css';
import TodoItem from './listComponent';

// TODO, TODOS
// Example: http://todomvc.com/examples/react/#/


class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pendingInput: '',
      btnValue: '',
      items: [],
      complete: [],
      deleted: [],
      isCompleteClass: false,
      btnClass: 'todoBtn',
      btnText: '',
      listClass: '',
    };

    this.handleTodoSubmit = this.handleTodoSubmit.bind(this)
  }

handleTodoInput = event => {
  // this sets the value
  this.setState({
    pendingInput: event.target.value
  })
}

handleTodoSubmit = (event) => {
  event.preventDefault()

  if (this.state.pendingInput !== '') {
    this.setState({
      // spread operator takes whatever is in the array and adds/updates
      items: [...this.state.items, this.state.pendingInput],
      btnValue: !this.state.btnValue,
      pendingInput: ''
    })
  } else {
    alert('uh oh, try again')
  }
}

toggleTodo = (index) => () => {
  // const setClass = this.state.items.filter(i => i == this.state.items[index])

    this.setState({
      complete: [...this.state.complete, this.state.items[index]],
      isCompleteClass: !this.state.isCompleteClass,
      btnClass: !this.state.isCompleteClass ? 'todoBtnDone' : 'todoBtn',
      btnText: <span>&#10004;</span>,
      listClass: !this.state.isCompleteClass ? 'todoItemDone' : '',
    })
}

deleteTodo = (index) => () => {
  const filteredList = this.state.items.filter(i => i !== this.state.items[index])
  // this.state.complete.filter(index => this.state.items[index])
  // this.state.complete.push(this.state.items[index])
  console.log('state is: ' + this.state.items[index])
   
      this.setState({
        items: filteredList,
        deleted: [...this.state.deleted, this.state.items[index]],
      })
  
    console.log(this.state.isCompleteClass, index)
}

render() {
  //console.log("***this is state***", this.state.items);
  return (
    <div className="App">
      <header className="App-header">
        <h1>todos</h1>
        <div className="todoContainer">
            <form className="todoForm" onSubmit={this.handleTodoSubmit} >
              {/* this lets us hold the value for targeting later */}
              <input id="pendingInput" 
                value={this.state.pendingInput} 
                onChange={this.handleTodoInput} 
                placeholder="Enter task"
              /> 
              <button type='submit'
                style={{textTransform: 'capitalize'}}>{`${this.state.btnValue || 'False'}`}
              </button>
            </form>
            <ul>
              {this.state.items.map((item, index) => {
                return <TodoItem 
                        item={item}
                        listClass={this.state.listClass}
                        btnClass={this.state.btnClass}
                        btnText={this.state.btnText}
                        // itemUpdate={this.handleItemUpdate(index)} 
                        itemUpdate={this.toggleTodo(index)}
                        itemDelete={this.deleteTodo(index)}
                        key={index}
                        />
              })}
            </ul>
        </div>
      </header>
    </div>
    );
  }
}

export default TodoList;


// DONE
// Create state for your app.js with isClicked: false in it
// Create a button and add an onClick handler that changes the value of isClicked
// Create an input field and then a function that changes the state of text: '' to the e.target.value onChange of the input field
// Change your onClickHandler function to push the value of text into todos: []
// Now clear text in the same function
// Once you have state being changed properly create an element for each of the items in todos: []
// Now .map() over todos and show each item in the DOM. REMEMBER to give the callback function in .map() an index and provide that to each of the elements as index={index}
// Create a button on each of the elements that uses this and when clicked removes/deletes the item from todos: []