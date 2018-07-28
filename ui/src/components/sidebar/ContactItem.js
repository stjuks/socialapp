import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactItem extends Component {
    render() {
        const {
            contact,
            getProfile
        } = this.props;

        return (
            <Link onClick={e => getProfile(contact.username)} to={`/${contact.username}`} className="contact-item">
                <div className="avatar-container">
                    <img src="/images/default-avatar.svg" alt="avatar" />
                </div>
                {contact.username}
            </Link>
        );
    }
}

export default ContactItem;
