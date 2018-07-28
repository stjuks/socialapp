import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getUserProfile, handleFollow } from '../actions/userActions';

import PostItem from '../components/feed/PostItem';
import Button from '../components/helpers/Button';

class UserProfile extends Component {
    componentDidMount() {
        const { username } = this.props.match.params;
        const { dispatch } = this.props;

        dispatch(getUserProfile(username));
    }

    handleFollow = (userId, isFollowing) => {
        this.props.dispatch(handleFollow(userId, isFollowing));
    };

    render() {
        const {
            activeProfile
        } = this.props;

        return (
            <div className="user-profile screen-container">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="username">
                        {activeProfile.username}
                    </div>
                    <Button
                        className="follow"
                        style={{ width: '100%', marginLeft: '10px' }}
                        onClick={e => this.handleFollow(activeProfile.id, activeProfile.is_watcher_following > 0)}
                    >
                        {activeProfile.is_watcher_following > 0 ? 'Unfollow ' : 'Follow '}
                    </Button>
                </div>
                <div className="profile-details">
                    <div className="posts">
                        <strong>{activeProfile.posts.length}</strong> posts
                    </div>
                    <div className="followers">
                        <strong>{activeProfile.follower_count}</strong> followers
                    </div>
                    <div className="following">
                        <strong>{activeProfile.following_count}</strong> following
                    </div>
                </div>
                <div className="profile-posts item-container">
                    {activeProfile.posts.map((post, i) => (
                        <PostItem post={post} key={i} />
                    ))}
                    {activeProfile.posts.map((post, i) => (
                        <PostItem post={post} key={i} />
                    ))}
                    {activeProfile.posts.map((post, i) => (
                        <PostItem post={post} key={i} />
                    ))}
                </div>
            </div>
        );
    }
}

const stateMap = (store) => {
    return {
        activeProfile: store.user.activeProfile
    }
};

export default withRouter(connect(stateMap)(UserProfile));
