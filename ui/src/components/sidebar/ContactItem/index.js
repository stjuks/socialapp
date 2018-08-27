import React, { Component } from 'react';

import {
    ContactItemStyled,
    ContactPictureStyled,
    ContactStatusStyled
} from './styles';

class ContactItem extends Component {
    render() {
        const { username } = this.props;

        return (
            <ContactItemStyled>
                <ContactPictureStyled>
                    <img src="/images/default-avatar.svg" alt="avatar" />
                </ContactPictureStyled>
                    {username}
                <ContactStatusStyled />
            </ContactItemStyled>
        );
    }
}

export default ContactItem;
