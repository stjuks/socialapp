import React, { Component } from 'react';

import Icon from 'styled/Icon';
import { MenuBarStyled } from './styles';

import { SETTINGS } from 'actions/types/modal';

class SearchUser extends Component {
    render() {
        const { toggleModal } = this.props;

        return (
            <MenuBarStyled>
                <Icon type="upload" />
                <Icon type="chat" />
                <Icon type="settings" onClick={() => toggleModal(SETTINGS.OPEN)} />
                <Icon type="profile" />
            </MenuBarStyled>
        );
    }
}

export default SearchUser;
