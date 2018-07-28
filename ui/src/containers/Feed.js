import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFollowingPosts } from '../actions/postActions';

import PostItem from '../components/feed/PostItem';

class Feed extends Component {
    componentDidMount() {
        this.props.dispatch(getFollowingPosts());
    };

    render() {
        const {
            followingPosts
        } = this.props;

        return (
            <div className="feed screen-container item-container">
                {followingPosts.map(post => (
                    <PostItem
                        key={post.post_id}
                        withDetails
                        post={post}
                    />
                ))}
            </div>
        );
    }
}

const stateMap = (store) => {
    return {
        followingPosts: store.posts.followingPosts
    }
};

export default connect(stateMap)(Feed);
