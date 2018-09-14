import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as loadImage from 'blueimp-load-image-npm';

import { createPost } from 'actions/postActions';
import { UPLOAD } from 'actions/types';

import Icon from 'styled/Icon';
import Input from 'styled/Input';

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
        caption: '',
        image: []
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleImage = e => {
        if (e.target.files && e.target.files[0]) {
            const image = e.target.files[0];

            this.setState({ image });
            
            loadImage.parseMetaData(image, data => {
                loadImage(image, img => {
                    let node = ReactDOM.findDOMNode(this.imageContainer);
                    node.childNodes[0] && node.removeChild(node.childNodes[0]);
                    node.appendChild(img);
                }, { orientation: data.exif && data.exif.get('Orientation') });
            })
        }
    };

    onSubmit = () => {
        const { image, caption } = this.state;
        const { dispatch } = this.props;

        dispatch(createPost(image, caption));
        dispatch(UPLOAD.CLOSE);
    }

    render() {
        const { isOpen, dispatch } = this.props;
        const { caption } = this.state;

        return (
            <ModalStyled width="60%" isOpen={isOpen} toggle={() => dispatch(UPLOAD.CLOSE)}>
                <ModalHeaderStyled>
                    <Icon type="upload" noHover />
                </ModalHeaderStyled>
                <ModalBodyStyled>
                    <ImageContainer>
                        <div ref={el => this.imageContainer = el} />
                    </ImageContainer>
                    <label htmlFor="file-input">asd</label>
                    <FileInputStyled id="file-input" name="image" onChange={e => this.handleImage(e)} type="file" />
                    <Input label="Caption" value={caption} name="caption" onChange={e => this.handleChange(e)} />
                    <button onClick={() => this.onSubmit()}>Create post</button>
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
