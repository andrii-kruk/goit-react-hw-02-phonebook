import React, { Component } from 'react';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { name: 'Rosie Simpson', number: '459-12-56' },
      { name: 'Hermione Kline', number: '443-89-12' },
      { name: 'Eden Clements', number: '645-17-79' },
      { name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContactToList = contact => {
    if (this.state.contacts.some(user => user.name === contact.name)) {
      alert('Contact already exists');
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  removeContactFromList = index => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter((contact, i) => i !== index),
    }));
  };

  filterContacts = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };

  render() {
    return (
      <section className="section">
        <ContactForm addContact={this.addContactToList} />

        <div className="contacts-container">
          <h3 className="contact-list-title">Contact List</h3>
          {this.state.contacts.length === 0 ? (
            <h3 className="contact-list-title">There are no contacts</h3>
          ) : (
            <>
              <Filter
                onChange={this.filterContacts}
                value={this.state.filter}
              />
              <ContactList
                contacts={this.state.contacts}
                removeContact={this.removeContactFromList}
              />
            </>
          )}
        </div>
      </section>
    );
  }
}
