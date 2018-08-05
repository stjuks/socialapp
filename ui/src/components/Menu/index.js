import React, { Component } from 'react';

import Icon from 'styled/Icon';

import { MenuStyled } from './styles';

import { SETTINGS, UPLOAD } from '../../actions/types/modal';

class Menu extends Component {
    render() {
        const {
            toggleModal
        } = this.props;

        return (
            <MenuStyled>
                <Icon onClick={() => toggleModal(UPLOAD)} src="/images/upload-1.svg" alt="Upload" />
                <Icon onClick={() => toggleModal(SETTINGS)} src="/images/settings.svg" alt="Settings" />
                <Icon src="/images/avatar.svg" alt="Profile" />
            </MenuStyled>
        );
    }
}

export default Menu;
