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
        const { img } = this.props;
        const { isImageLoaded } = this.state;

        return (
            <PostItemStyled>
                <PostItemWrapper>
                    <PostImageStyled>
                        <PostImageWrapper isImageLoaded={isImageLoaded}>
                            <PostImage onLoad={() => this.setState({ isImageLoaded: true })} src={img} />
                        </PostImageWrapper>
                        <PostNameStyled className="post-name">
                            name
                        </PostNameStyled>
                    </PostImageStyled>
                    <PostDetailsStyled>
                        <DetailContainer>
                            <Icon type="heart" /> 129
                        </DetailContainer>
                        <DetailContainer>
                            <Icon type="chat" /> 11
                        </DetailContainer>
                        <p>Do you like puppies? :) #doggo #puppy #dog</p>
                    </PostDetailsStyled>
                </PostItemWrapper>
            </PostItemStyled>
        );
    }
}

export default PostItem;
