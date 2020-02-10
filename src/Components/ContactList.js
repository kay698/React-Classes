import React, { Component } from "react";
import Contact from './Contact'

class ContactList extends Component {
  render() {
    return (
      <div>
        {this.props.contacts.map((contacts) => {
          return  <Contact  contacts = {contacts} key = {contacts.id}/>
        })

        }
      </div>
    );
  }
}
export default ContactList