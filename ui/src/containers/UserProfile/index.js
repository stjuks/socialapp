import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getUserProfile, handleFollow } from 'actions/userActions';

import Button from 'styled/Button';
import { ScreenContainer } from 'styled/ScreenContainer';
import { Title } from 'styled/Title';

import { ProfileTitleStyled, ProfileDetailsStyled } from './styles';

import Posts from 'components/Posts';

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
            <ScreenContainer>
                <ProfileTitleStyled>
                    <Title size="large">
                        {activeProfile.username}
                    </Title>
                    <Button
                        width="85px"
                        onClick={() => this.handleFollow(activeProfile.id, activeProfile.is_watcher_following > 0)}
                    >
                        {activeProfile.is_watcher_following > 0 ? 'Unfollow ' : 'Follow '}
                    </Button>
                </ProfileTitleStyled>
                <ProfileDetailsStyled>
                    <div>
                        <strong>{activeProfile.posts.length}</strong> posts
                    </div>
                    <div>
                        <strong>{activeProfile.follower_count}</strong> followers
                    </div>
                    <div>
                        <strong>{activeProfile.following_count}</strong> following
                    </div>
                </ProfileDetailsStyled>
                <Posts
                    itemsPerRow={4}
                    posts={activeProfile.posts}
                />
            </ScreenContainer>
        );
    }
}

const stateMap = (store) => {
    return {
        activeProfile: store.user.activeProfile
    }
};

export default withRouter(connect(stateMap)(UserProfile));
