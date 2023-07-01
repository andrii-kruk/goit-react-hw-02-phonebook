import React, { Component } from 'react';

class ContactListItem extends Component {
  onRemoveBtnClick = () => {
    this.props.removeContact(this.props.index);
  };

  render() {
    return (
      <li className="contact-item">
        <p className="contact-info">
          {this.props.name}: {this.props.number}
        </p>
        <button
          type="button"
          className="remove-button"
          aria-label="Remove contact"
          onClick={this.onRemoveBtnClick}
        >
          Remove
        </button>
      </li>
    );
  }
}

export default ContactListItem;
