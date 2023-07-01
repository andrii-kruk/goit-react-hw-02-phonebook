import React, { Component } from 'react';

class ContactListItem extends Component {
  state = {};
  render() {
    return (
      <li className="contact-item">
        <p className="contact-info">Andrii Kruk: +48731747052</p>
        <button
          type="button"
          className="remove-button"
          aria-label="Remove contact"
        >
          Remove
        </button>
      </li>
    );
  }
}

export default ContactListItem;
