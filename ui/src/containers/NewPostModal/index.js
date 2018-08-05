import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ModalBody, ModalHeader } from 'reactstrap';

import { UPLOAD } from 'actions/types/modal';
import { NewPostModalStyled } from './styles';

class NewPostModal extends Component {
    render() {
        const {
            show,
            dispatch
        } = this.props;

        return (
            <NewPostModalStyled
                isOpen={show}
                toggle={e => dispatch(UPLOAD.CLOSE)}
            >
                <ModalHeader>
                    xd
                </ModalHeader>
                <ModalBody>
                    Tsau
                </ModalBody>
            </NewPostModalStyled>
        );
    }
}

const stateMap = (store) => {
    return {

    }
};

export default connect(stateMap)(NewPostModal);
