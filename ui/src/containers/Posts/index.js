import React, { Component } from 'react';
import { connect } from 'react-redux';

import { API_URL } from 'config';

import { PostsStyled } from './styles';
import PostItem from 'components/PostItem';

import { likePost, unlikePost } from 'actions/postActions';

class Posts extends Component {
    handleLike = post => {
        if (post.has_watcher_liked) {
            this.props.dispatch(unlikePost(post.post_id, post.poster_username));
        } else {
            this.props.dispatch(likePost(post.post_id, post.poster_username));
        }
    }

    render() {
        const { posts } = this.props;

        return (
            <PostsStyled>
                {posts && posts.map(post =>
                    <PostItem
                        handleLike={() => this.handleLike(post)}
                        key={post.post_id}
                        img={`${API_URL}/posts/image/${post.image_name}`}
                        likeCount={post.like_count}
                        postId={post.post_id}
                        caption={post.caption}
                        timestamp={post.created_at}
                        hasWatcherLiked={post.has_watcher_liked}
                        username={post.poster_username}
                        commentCount={post.comment_count}
                    />
                )}
            </PostsStyled>
        );
    }
}

export default connect()(Posts);
