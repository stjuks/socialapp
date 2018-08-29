import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as loadImage from 'blueimp-load-image-npm';
import { UPLOAD } from 'actions/types/modal';

import Icon from 'styled/Icon';

import {
    ModalStyled,
    ModalBodyStyled,
    ModalHeaderStyled
} from 'styled/modal';

import {
    ImageContainer,
    FileInputStyled
} from './styles';

class UploadModal extends Component {
    state = {
        image: [],
        loadedImage: ''
    };

    handleChange = e => {
        const value = e.target.files[0] ? e.target.files[0] : e.target.value;
        console.log(value);
        this.setState({ [e.target.name]: value })
    };

    handleImage = e => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();

            reader.onload = evt => {
                this.setState({ loadedImage: evt.target.result });
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    };

    render() {
        const { isOpen, dispatch } = this.props;

        return (
            <ModalStyled width="60%" isOpen={isOpen} toggle={() => dispatch(UPLOAD.CLOSE)}>
                <ModalHeaderStyled>
                    <Icon type="upload" noHover />
                </ModalHeaderStyled>
                <ModalBodyStyled>
                    <ImageContainer>
                        <img src={this.state.loadedImage} />
                    </ImageContainer>
                    <FileInputStyled name="image" onChange={e => this.handleImage(e)} type="file" />
                </ModalBodyStyled>
            </ModalStyled>
        );
    }
}

const mapStateToProps = store => {
    return {
        isOpen: store.modal.upload
    }
};

export default connect(mapStateToProps)(UploadModal);
