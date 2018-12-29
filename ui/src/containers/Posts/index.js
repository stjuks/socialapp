import React, { Component } from 'react';
import { connect } from 'react-redux';

import { POST_MODAL } from 'actions/types';
import { setActivePost as setActivePostAction } from 'actions/postActions';

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

    setActivePost = post => {
        this.props.dispatch(setActivePostAction(post));
        this.props.dispatch(POST_MODAL.OPEN);
    }

    render() {
        const { posts, dispatch } = this.props;

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
                        onClick={() => this.setActivePost(post)}
                    />
                )}
            </PostsStyled>
        );
    }
}

export default connect()(Posts);
