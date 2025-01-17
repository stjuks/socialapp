import React, { Component } from 'react';
import history from 'helpers/history';

import Icon from 'styled/Icon';
import { MenuBarStyled } from './styles';

import { SETTINGS, UPLOAD_MODAL } from 'actions/types';

class MenuBar extends Component {
    render() {
        const { toggleModal, handleProfile, handleHome } = this.props;

        return (
            <MenuBarStyled>
                <Icon button type="home" onClick={() => handleHome()} />
                <Icon button type="upload" onClick={() => toggleModal(UPLOAD_MODAL.OPEN)} />
                <Icon button type="chat" />
                <Icon button type="settings" onClick={() => toggleModal(SETTINGS.OPEN)} />
                <Icon button type="profile" onClick={() => handleProfile()} />
            </MenuBarStyled>
        );
    }
}

export default MenuBar;
