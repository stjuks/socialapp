import React, { Component } from 'react';

import ContactItem from '../ContactItem/index';

import { ContactListStyled, SidebarTitleStyled } from './styles';

class ContactList extends Component {
    render() {
        const {
            contacts,
            getProfile
        } = this.props;

        return (
            <ContactListStyled>
                <SidebarTitleStyled>
                    CONTACTS
                </SidebarTitleStyled>
                {contacts.map((contact, i) => (
                    <ContactItem
                        key={i}
                        getProfile={getProfile}
                        contact={contact}
                    />
                ))}
            </ContactListStyled>
        );
    }
}

export default ContactList;
