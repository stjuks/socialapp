import React, { Component } from 'react';
import { connect } from 'react-redux';

import { POST_MODAL } from 'actions/types';
import { API_URL } from 'config';

import { ModalStyled } from 'styled/modal';
import Icon from 'styled/Icon';
import LongText from 'components/LongText';

import {
    ImageWrapperStyled,
    ImageContainerStyled,
    ImageStyled,
    PostHeaderStyled,
    ProfilePictureStyled,
    PostDetailsStyled,
    PostFooterStyled
} from './styles';

class PostModal extends Component {
    handleModalClose = () => {
        this.props.dispatch(POST_MODAL.CLOSE);
    }

    render() {
        const { 
            isOpen, 
            activePost 
        } = this.props;

        return (
            Object.keys(activePost).length > 0 ?
            <ModalStyled width="60%" isOpen={isOpen} toggle={() => this.handleModalClose()}>
                <PostHeaderStyled>
                    <ProfilePictureStyled src="images/default-avatar.svg" />
                    <PostDetailsStyled>
                        <strong>{activePost.poster_username}</strong><br/>
                        {new Date(activePost.created_at).toLocaleString()}
                    </PostDetailsStyled>
                </PostHeaderStyled>
                <ImageWrapperStyled onClick={() => this.handleModalClose()}>
                    <ImageContainerStyled>
                        <ImageStyled src={`${API_URL}/posts/image/${activePost.image_name}`} />
                    </ImageContainerStyled>
                </ImageWrapperStyled>
                <PostFooterStyled>
                    <div className="row-1">
                        <div className="icon">
                            <Icon type="heart" />
                            {activePost.like_count}
                        </div>
                        <div className="icon">
                            <Icon noHover type="chat" />
                            {activePost.comment_count}
                        </div>
                    </div>
                    <LongText text={activePost.caption} />
                </PostFooterStyled>
            </ModalStyled> : null
        );
    }
}

const mapStateToProps = store => {
    return {
        isOpen: store.modal.post,
        activePost: store.posts.activePost
    }
};

export default connect(mapStateToProps)(PostModal);
