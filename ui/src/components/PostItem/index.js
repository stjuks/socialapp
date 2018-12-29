import React, { Component } from 'react';

import Icon from 'styled/Icon';

import {
    PostItemStyled,
    PostItemWrapper,
    PostImageStyled,
    PostImageWrapper,
    PostImage,
    PostNameStyled,
    PostDetailsStyled,
    DetailContainer
} from './styles';

class PostItem extends Component {
    state = {
        isImageLoaded: false
    };

    render() {
        const { 
            img, 
            username, 
            caption, 
            timestamp, 
            likeCount, 
            commentCount,
            hasWatcherLiked,
            handleLike,
            onClick
        } = this.props;

        const { 
            isImageLoaded 
        } = this.state;

        return (
            <PostItemStyled>
                <PostItemWrapper>
                    <PostImageStyled onClick={() => onClick()}>
                        <PostImageWrapper isImageLoaded={isImageLoaded}>
                            <PostImage onLoad={() => this.setState({ isImageLoaded: true })} src={img} />
                        </PostImageWrapper>
                        <PostNameStyled className="post-name">
                            {username}
                        </PostNameStyled>
                    </PostImageStyled>
                    <PostDetailsStyled>
                        <DetailContainer>
                            <Icon 
                                onClick={() => handleLike()}
                                isActive={hasWatcherLiked} 
                                activeColor="red" 
                                type="heart" 
                            /> {likeCount}
                        </DetailContainer>
                        <DetailContainer>
                            <Icon noHover type="chat" /> {commentCount}
                        </DetailContainer>
                        <p>{caption}</p>
                    </PostDetailsStyled>
                </PostItemWrapper>
            </PostItemStyled>
        );
    }
}

export default PostItem;
