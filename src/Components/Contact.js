import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.contacts.name} {this.props.contacts.phone}</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
