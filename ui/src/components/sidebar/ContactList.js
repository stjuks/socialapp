import React, { Component } from 'react';

import ContactItem from './ContactItem';

class ContactList extends Component {
    render() {
        const {
            contacts,
            getProfile
        } = this.props;

        return (
            <div className="contact-list">
                <div className="sidebar-title c1">
                    CONTACTS
                </div>
                {contacts.map((contact, i) => (
                    <ContactItem
                        key={i}
                        getProfile={getProfile}
                        contact={contact}
                    />
                ))}
            </div>
        );
    }
}

export default ContactList;
