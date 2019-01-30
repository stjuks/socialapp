import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { POST_MODAL } from 'actions/types';
import { likePost, unlikePost } from 'actions/postActions';
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

    handleLike = () => {
        const { activePost, dispatch } = this.props;
        if (activePost.has_watcher_liked) {
            dispatch(unlikePost(activePost.post_id, activePost.poster_username));
        } else {
            dispatch(likePost(activePost.post_id, activePost.poster_username));
        }
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
                    <PostDetailsStyled 
                        title={moment(activePost.created_at).format('DD.MM.YYYY HH:mm:ss')}
                    >
                        <strong>{activePost.poster_username}</strong><br/>
                        {moment(activePost.created_at).fromNow()}
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
                            <Icon 
                                type="heart" 
                                onClick={() => this.handleLike()}
                                isActive={activePost.has_watcher_liked}
                                activeColor="red"
                            />
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
