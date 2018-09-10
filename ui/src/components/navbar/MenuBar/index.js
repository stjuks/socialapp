import React, { Component } from 'react';
import history from 'helpers/history';

import Icon from 'styled/Icon';
import { MenuBarStyled } from './styles';

import { SETTINGS, UPLOAD } from 'actions/types';

class MenuBar extends Component {
    render() {
        const { toggleModal, handleProfile } = this.props;

        return (
            <MenuBarStyled>
                <Icon button type="upload" onClick={() => toggleModal(UPLOAD.OPEN)} />
                <Icon button type="chat" />
                <Icon button type="settings" onClick={() => toggleModal(SETTINGS.OPEN)} />
                <Icon button type="profile" onClick={() => handleProfile()} />
            </MenuBarStyled>
        );
    }
}

export default MenuBar;
