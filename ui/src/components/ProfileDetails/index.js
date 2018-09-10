import React, { Component } from 'react';

import { 
    ProfileDetailsStyled,
    FirstRowStyled,
    SecondRowStyled,
    ProfilePictureStyled,
    DetailsStyled,
    DescriptionStyled,
    FollowBtnStyled,
    UsernameStyled,
    StatisticsStyled
} from './styles';

import Icon from 'styled/Icon';

class ProfileDetails extends Component {
    render() {
        const { 
            username,
            isWatcherFollowing,
            postCount,
            followerCount,
            followingCount,
            handleFollow,
            isSelf
        } = this.props;

        return (
            <ProfileDetailsStyled>
                <FirstRowStyled>
                    <ProfilePictureStyled src="images/default-avatar.svg" />
                    <DetailsStyled>
                        {!isSelf ? isWatcherFollowing ?
                            <FollowBtnStyled onClick={() => handleFollow(false)}>
                                <Icon className="follow-icon" type="unfollow" noHover /> Unfollow
                            </FollowBtnStyled> :
                            <FollowBtnStyled onClick={() => handleFollow(true)}>
                                <Icon className="follow-icon" type="follow" noHover /> Follow
                            </FollowBtnStyled> : null
                        }
                        <UsernameStyled>
                            {username}
                        </UsernameStyled>
                        <StatisticsStyled>
                            <span><strong>{postCount}</strong> posts</span>
                            <span><strong>{followerCount}</strong> followers</span>
                            <span><strong>{followingCount}</strong> following</span>
                        </StatisticsStyled>
                    </DetailsStyled>
                </FirstRowStyled>
                <SecondRowStyled>
                    <DescriptionStyled>
                        Hello, My name is Steven and I approve this message. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Etiam at justo in quam sollicitudin condimentum.
                    </DescriptionStyled>
                </SecondRowStyled>
            </ProfileDetailsStyled>
        );
    }
}

export default ProfileDetails;
