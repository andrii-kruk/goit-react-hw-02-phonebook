import React, { Component } from 'react';

import ContactListItem from './ContactListItem/ContactListItem';

class ContactList extends Component {
  state = {};
  render() {
    return (
      <div className="contact-list-container">
        <ul className="contact-list">
          <ContactListItem />
        </ul>
      </div>
    );
  }
}

export default ContactList;
