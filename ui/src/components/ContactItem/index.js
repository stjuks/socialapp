import React, { Component } from 'react';

import {
    ContactItemStyled,
    ContactPictureStyled,
    ContactStatusStyled
} from './styles';

class ContactItem extends Component {
    render() {
        return (
            <ContactItemStyled>
                <ContactPictureStyled>
                    <img src="/images/default-avatar.svg" alt="avatar" />
                </ContactPictureStyled>
                John Doe
                <ContactStatusStyled />
            </ContactItemStyled>
        );
    }
}

export default ContactItem;
