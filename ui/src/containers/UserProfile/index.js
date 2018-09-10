import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getUserProfile, follow, unfollow } from 'actions/userActions';
import { getPosts } from 'actions/postActions';

import ProfileDetails from 'components/ProfileDetails';
import Posts from 'components/Posts';

import { 
    UserProfileStyled,
    DividerStyled
} from './styles';

class UserProfile extends Component {
    async componentDidMount() {
        const { dispatch, match } = this.props;
        dispatch(getUserProfile(match.params.username));
        dispatch(getPosts(match.params.username));
    }

    handleFollow = isFollow => {
        const { dispatch, profile } = this.props;
        dispatch(isFollow ? 
            follow(profile.user_id) : 
            unfollow(profile.user_id)
        );
    }

    render() {
        const { profile, userPosts, self } = this.props;

        return (
            <UserProfileStyled>
                <ProfileDetails
                    isWatcherFollowing={profile.is_watcher_following}
                    postCount={profile.post_count}
                    followerCount={profile.follower_count}
                    followingCount={profile.following_count}
                    username={profile.username}
                    handleFollow={this.handleFollow}
                    isSelf={profile.user_id === self.userId}
                />
                <DividerStyled />
                <Posts
                    posts={userPosts[profile.username]}
                />
            </UserProfileStyled>
        );
    }
}

const mapStateToProps = store => {
    return {
        profile: store.user.activeProfile,
        userPosts: store.posts.userPosts,
        self: store.user.self
    }
}

export default withRouter(connect(mapStateToProps)(UserProfile));
