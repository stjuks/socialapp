import React, { Component } from 'react';

import { API_URL } from 'config';

import { PostsStyled } from './styles';
import PostItem from '../PostItem';

class Posts extends Component {
    render() {
        const { posts } = this.props;

        return (
            <PostsStyled>
                {posts.map(post =>
                    <PostItem
                        img={`${API_URL}/posts/image/${post.image}`}
                        likeCount={post.like_count}
                        postId={post.post_id}
                        caption={post.caption}
                        timestamp={post.timestamp}
                        username={post.username}
                        commentCount={post.comments.length}
                    />
                )}
            </PostsStyled>
        );
    }
}

export default Posts;
