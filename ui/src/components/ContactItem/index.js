import React, { Component } from 'react';

import { ContactItemStyled, AvatarContainerStyled } from './styles';

class ContactItem extends Component {
    render() {
        const {
            contact,
            getProfile
        } = this.props;

        return (
            <ContactItemStyled
                onClick={e => getProfile(contact.username)}
                to={`/${contact.username}`}
            >
                <AvatarContainerStyled>
                    <img src="/images/default-avatar.svg" alt="avatar" />
                </AvatarContainerStyled>
                {contact.username}
            </ContactItemStyled>
        );
    }
}

export default ContactItem;
