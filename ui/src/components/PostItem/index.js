import React, { Component } from 'react';

import { API_URL } from 'config';

import {
    PostItemStyled,
    PostDetailsStyled,
    PostImage,
    PostImageInner,
    PostImageContainerStyled
} from './styles';

class PostItem extends Component {
    render() {
        const {
            post,
            withDetails
        } = this.props;

        return (
            <PostItemStyled>
                <PostImageContainerStyled>
                    <PostImageInner>
                        <PostImage src={`${API_URL}/posts/image/${post.image}`} />
                    </PostImageInner>
                </PostImageContainerStyled>
                {withDetails &&
                    <PostDetailsStyled>
                        <div className="post-username">{post.username}</div>
                        <div className="post-likes">{post.like_count} likes</div>
                        <div className="post-caption">{post.caption}</div>
                    </PostDetailsStyled>
                }
            </PostItemStyled>
        );
    }
}

export default PostItem;
