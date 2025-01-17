import React, { Component } from 'react';

import {
    ContactListStyled,
    ContactListHeader
} from './styles';

import { Divider } from 'styled/Divider';
import ContactItem from '../ContactItem';

class ContactList extends Component {
    render() {
        const { following } = this.props;

        return (
            <ContactListStyled>
                <ContactListHeader>
                    Following
                </ContactListHeader>
                <Divider margin="0 0 8px 0" />
                {following.map(user =>
                    <ContactItem
                        key={user.username}
                        username={user.username}
                    />
                )}
            </ContactListStyled>
        );
    }
}

export default ContactList;
