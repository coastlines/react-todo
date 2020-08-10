import React, {Component} from 'react'; // without component you need to use React.Component
import './App.css';
import ListComponent from './listComponent';

// TO DO FOR CLASS
// Create state for your app.js with isClicked: false in it
// Create a button and add an onClick handler that changes the value of isClicked
// Create an input field and then a function that changes the state of text: '' to the e.target.value onChange of the input field
// Change your onClickHandler function to push the value of text into todos: []
// Now clear text in the same function
// Once you have state being changed properly create an element for each of the items in todos: []
// Now .map() over todos and show each item in the DOM. REMEMBER to give the callback function in .map() an index and provide that to each of the elements as index={index}
// Create a button on each of the elements that uses this and when clicked removes/deletes the item from todos: []

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textEntry: '',
      btnValue: '',
      items: [],
      complete: []
    };

    this.todoSubmit = this.todoSubmit.bind(this)
  }


inputUpdate = event => {
  // this sets the value
  this.setState({
    textEntry: event.target.value
  })
}

todoSubmit = (event) => {
  event.preventDefault()

  this.setState({
    // spread operator takes whatever is in the array and adds/updates
    items: [...this.state.items, this.state.textEntry],
    btnValue: !this.state.btnValue,
    textEntry: ''
  })
}

itemUpdate = (index) => () => {
  let list = [...this.state.items]
  list.splice(index, 1)
  this.setState({
    items: list
  })
}

// // refactor to use filter
// itemUpdate = (index) => () => {
//   const filteredItems = this.state.items.filter(item =>
//     item[index] !== index);
//   this.setState({
//     items: this.filteredItems
//   })
// }


render() {
  //console.log("***this is state***", this.state.items);
  return (
        <div className="App">
          <header className="App-header">
            <h1>todos</h1>
              <form>
                {/* this lets us hold the value for targeting later */}
                <input id="textEntry" value={this.state.textEntry} onChange={this.inputUpdate} placeholder="Enter task"/> 
                <button type='button' onClick={this.todoSubmit} style={{textTransform: 'capitalize'}}>{`${this.state.btnValue || 'False'}`}</button>
              </form>
              <ul>
                {this.state.items.map((item, index) => {
                  return <ListComponent item={item} itemUpdate={this.itemUpdate(index)} key={index} />
                })}
              </ul>
          </header>
        </div>
      );
  }
}

export default App;
