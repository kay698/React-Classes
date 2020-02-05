import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Welcome text="Welcome to State" />
          <p>This should show and hide</p>
          <button>Show/Hide</button>
        </header>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text } = this.props;
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
