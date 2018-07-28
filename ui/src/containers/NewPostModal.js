import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { UPLOAD } from '../actions/types/modal';

class NewPostModal extends Component {
    render() {
        const {
            show,
            dispatch
        } = this.props;

        return (
            <Modal
                isOpen={show}
                toggle={e => dispatch(UPLOAD.CLOSE)}
                className="new-post modal"
            >
                <ModalHeader>
                    xd
                </ModalHeader>
                <ModalBody>
                    Tsau
                </ModalBody>
            </Modal>
        );
    }
}

const stateMap = (store) => {
    return {

    }
};

export default connect(stateMap)(NewPostModal);
