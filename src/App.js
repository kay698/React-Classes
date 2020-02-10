import React, { Component } from "react";
import ContactList from "./Components/ContactList";
 

class App extends Component {
  render() {
    
    return (
      <div>        
        <h1>Contact List</h1>
        <ContactList contacts ={this.props.contacts} />
      </div>
    );
  }
}
export default App