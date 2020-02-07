import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    toggle : true,    
  }

  toggle = () => {

    this.setState({
      toggle : !this.state.toggle
    })
  }
  
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> 
          
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Welcome text="Welcome to State" toggle = {this.state.toggle} />
          {! this.state.toggle &&
           <p>This Should Hide And Show</p>
          }
        
          <button onClick = {this.toggle}>Show Hidden Text</button>
          </header>
          </div>
    );
  }
}

class Welcome extends Component {
  state = {
    toggle : true
  }
  render() {
    const { text, toggle} = this.props;
    console.log(toggle)//toggle has been passed as a prop into the welcome component
    return (
      <>
        <h1 className="App-title">{text}</h1>
        {/* <p>chidera</p> */}
      </>
    );
  }
}

export default App;

// //explicit function
// const myFunction = () => {
//   return (
//     <p>hello</p>
//   )
// }

// //implicit function
// const myFunction2 = () => (
//   <p>hello</p>
// )
//react fragment ..using the tags empty <> </> to cover y tags in my react body..this is used if i dont ...
//plan on styling the div
