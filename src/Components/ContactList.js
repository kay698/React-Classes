import React, { Component } from "react";


class ContactList extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>{this.props.contacts.name} {this.props.contacts.number} </li>
        </ul>
      </div>
    );
  }
}
export default ContactList