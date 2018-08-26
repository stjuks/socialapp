import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SETTINGS } from 'actions/types/modal';
import { logout } from 'actions/authActions';

import Icon from 'styled/Icon';

import {
    SettingsModalStyled,
    ModalBodyStyled,
    ModalHeaderStyled,
    OptionListStyled
} from './styles';

class SettingsModal extends Component {
    render() {
        const { isOpen, dispatch } = this.props;

        return (
            <SettingsModalStyled isOpen={isOpen} toggle={() => dispatch(SETTINGS.CLOSE)}>
                <ModalHeaderStyled>
                    <Icon type="settings" noHover />
                </ModalHeaderStyled>
                <ModalBodyStyled>
                    <OptionListStyled>
                        <li>Profile Settings</li>
                        <li onClick={() => dispatch(logout())}>Log out</li>
                    </OptionListStyled>
                </ModalBodyStyled>
            </SettingsModalStyled>
        );
    }
}

const mapStateToProps = store => {
    return {
        isOpen: store.modal.settings
    }
};

export default connect(mapStateToProps)(SettingsModal);
