import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
//life cycle methods are used to set a state and props for sepcific timing
  constructor(props) {
    super(props);
    console.log('will mount')
  }//constructor won't be used coz we have state
//cwm fired before the component renders and does not triger a rerender
  componentWillMount() {
    console.log('will mount')
  }

  //cdm fires immediately after rendering also  triggers a rerender
  componentDidMount() {
    console.log('mounted')
  }

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
          <Welcome text="Welcome to Life Cycle Methods" toggle = {this.state.toggle} />
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
    console.log(toggle)
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
