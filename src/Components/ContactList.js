import React, { Component } from "react";
import Contact from './Contact'

class ContactList extends Component {
  constructor() {
    super();
    this.state = {
      search : 'Level Up'
    };
  }

  updateSearch(event) {
    // console.log(event.target.value)
    this.setState({search : event.target.value.substr(0, 9) })
  }

  render() {
  
    return (
      <div>
        {this.props.contacts.map((contacts) => {
          return  <Contact  contacts = {contacts} key = {contacts.id}/>
        })
        }

        <input value = {this.state.search} type = 'text' onChange = {this.updateSearch.bind(this)}/> 
       
      </div>
    );
  }
}
export default ContactList