import React, { Component } from 'react';
import ContactListItem from './ContactListItem/ContactListItem';
import { nanoid } from 'nanoid';

class ContactList extends Component {
  state = {};

  render() {
    return (
      <div className="contact-list-container">
        <ul className="contact-list">
          {this.props.contacts.map(({ name, number }, index) => {
            return (
              <ContactListItem
                key={nanoid()}
                name={name}
                number={number}
                removeContact={this.props.removeContact}
                index={index}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ContactList;
