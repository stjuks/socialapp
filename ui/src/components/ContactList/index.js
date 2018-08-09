import React, { Component } from 'react';

import {
    ContactListStyled,
    ContactListHeader
} from './styles';

import { Divider } from 'styled/Divider';
import ContactItem from '../ContactItem';

class ContactList extends Component {
    render() {
        return (
            <ContactListStyled>
                <ContactListHeader>
                    Contacts
                </ContactListHeader>
                <Divider margin="0 0 8px 0" />
                <ContactItem />
                <ContactItem />
            </ContactListStyled>
        );
    }
}

export default ContactList;
