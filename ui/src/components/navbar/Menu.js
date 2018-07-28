import React, { Component } from 'react';

import Icon from '../helpers/Icon';

class Menu extends Component {
    render() {
        const {
            toggleModal
        } = this.props;

        return (
            <div className="navbar-section menu-container">
                <Icon onClick={e => toggleModal()} src="/images/upload-1.svg" alt="Upload" />
                <Icon src="/images/settings.svg" alt="Settings" />
                <Icon src="/images/avatar.svg" alt="Profile" />
            </div>
        );
    }
}

export default Menu;
