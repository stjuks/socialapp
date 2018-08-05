import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ModalBody } from 'reactstrap';

import { SETTINGS } from 'actions/types/modal';
import { SettingsModalStyled } from './styles';

import { logout } from 'actions/authActions';

class SettingsModal extends Component {
    render() {
        const {
            show,
            dispatch
        } = this.props;

        return (
            <SettingsModalStyled
                isOpen={show}
                toggle={() => dispatch(SETTINGS.CLOSE)}
            >
                <ModalBody>
                    <div onClick={() => dispatch(logout())}>Log out</div>
                </ModalBody>
            </SettingsModalStyled>
        );
    }
}

const stateMap = (store) => {
    return {

    }
};

export default connect(stateMap)(SettingsModal);
