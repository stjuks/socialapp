import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as loadImage from 'blueimp-load-image-npm';

import { createPost } from 'actions/postActions';
import { UPLOAD_MODAL, CREATE_POST } from 'actions/types';

import Icon from 'styled/Icon';
import Input from 'styled/Input';

import {
    ModalStyled,
    ModalHeaderStyled
} from 'styled/modal';

import Button from 'styled/Button';

import {
    ImageContainer,
    FileInputStyled,
    InputsStyled,
    CaptionStyled,
    UploadModalBodyStyled,
    LabelStyled,
    ImageStyled,
    SubmitBtnStyled,
    ImageOverlayStyled,
    ErrorMessageStyled
} from './styles';

class UploadModal extends Component {
    state = {
        caption: '',
        image: null
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleImage = e => {
        if (e.target.files && e.target.files[0]) {
            const image = e.target.files[0];

            if (image.type === 'image/jpeg' || image.type === 'image/png') {
                this.setState({ image });
            
                loadImage.parseMetaData(image, data => {
                    loadImage(image, img => {
                        let node = ReactDOM.findDOMNode(this.imageContainer);
                        node.childNodes[0] && node.removeChild(node.childNodes[0]);
                        node.appendChild(img);
                    }, { orientation: data.exif && data.exif.get('Orientation') });
                })
            } else {
                this.props.dispatch(
                    CREATE_POST.ERROR('Only JPG and PNG files allowed!')
                );
            }
        }
    };

    onSubmit = () => {
        const { image, caption } = this.state;
        const { dispatch } = this.props;

        if (image) {
            dispatch(createPost(image, caption))
        } else {
            dispatch(CREATE_POST.ERROR('You need to choose an image first!'));
        }
    }

    handleModalClose = () => {
        this.props.dispatch(UPLOAD_MODAL.CLOSE);
        this.setState({ caption: '', image: null });
    }

    render() {
        const { isOpen, dispatch, createPostError, isCreatePostLoading } = this.props;
        const { caption, image } = this.state;

        return (
            <ModalStyled width="60%" isOpen={isOpen} toggle={() => this.handleModalClose()}>
                <ModalHeaderStyled>
                    <Icon type="upload" noHover />
                </ModalHeaderStyled>
                <UploadModalBodyStyled>
                    <ImageContainer htmlFor="file-input">
                        <ImageStyled isImageLoaded={image} ref={el => this.imageContainer = el}>
                            <ImageOverlayStyled>
                                Click here<br/>to load an image!
                            </ImageOverlayStyled>
                        </ImageStyled>
                    </ImageContainer>
                    <InputsStyled>
                        <FileInputStyled 
                            id="file-input" 
                            name="image" 
                            onChange={e => this.handleImage(e)} 
                            type="file" 
                        />
                        <LabelStyled>
                            Caption:
                        </LabelStyled>
                        <CaptionStyled 
                            value={caption}
                            name="caption"
                            onChange={e => this.handleChange(e)}
                        />
                        {/*<SubmitBtnStyled onClick={() => this.onSubmit()}>
                            Upload post
                        </SubmitBtnStyled>*/}
                        <Button 
                            onClick={() => this.onSubmit()} 
                            value="Upload post" 
                            isLoading={isCreatePostLoading}
                        />
                        {createPostError &&
                            <ErrorMessageStyled>
                                {createPostError}
                            </ErrorMessageStyled>
                        }
                    </InputsStyled>
                </UploadModalBodyStyled>
            </ModalStyled>
        );
    }
}

const mapStateToProps = store => {
    return {
        isOpen: store.modal.upload,
        createPostError: store.error.createPost,
        isCreatePostLoading: store.loading.createPost
    }
};

export default connect(mapStateToProps)(UploadModal);
