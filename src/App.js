import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import FirstComponent from './firstComponent'

// TO DO
// Add a new form that uses the same component
// Figure out how to add a delete
// Figure out how to stop logo

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // isOn: false
      input: '',
      items: []
    };
  }

// toggle = () => {
//   this.setState({isOn: !this.state.isOn})
// }

inputUpdate = event => {
  // this sets the value
  this.setState({input: event.target.value})
}

formSubmit = event => {
  event.preventDefault()
  console.log("This is state", this.state.items)
  this.setState({
    // spread operator takes whatever is in the array and adds/updates
    items: [...this.state.items, this.state.input],
    input: ''
  })
}

render() {
  console.log("***this is state***", this.state.items);
  return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Hello World</h1>
            <form onSubmit={this.formSubmit}>
              {/* this lets us hold the value for targeting later */}
              <input value={this.state.input} onChange={this.inputUpdate}></input>
              <button>Submit</button>
            </form>
            {/* <ul>
              {this.state.items.map((item, index) => {
              return <li key={index}>{this.state.items[index]}</li>
              })}
            </ul> */}
            <FirstComponent items={this.state.items} />
          </header>
        </div>
      );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Hello World</h1>
//       </header>
//     </div>
//   );
// }

 /* this component, go find a method named toggle */
/* <button onClick={this.toggle}>{this.state.isOn ? 'On' : 'Off'}</button>  */

// <input value={this.state.input} onChange={this.inputUpdate}></input>



export default App;
