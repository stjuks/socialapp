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
        const { posts } = this.props;

        return (
            <ProfileDetailsStyled>
                <FirstRowStyled>
                    <ProfilePictureStyled src="images/default-avatar.svg" />
                    <DetailsStyled>
                        <FollowBtnStyled>
                            <Icon className="follow-icon" type="follow" noHover /> Follow
                        </FollowBtnStyled>
                        <UsernameStyled>
                            stevenjuks
                        </UsernameStyled>
                        <StatisticsStyled>
                            <span><strong>3</strong> posts</span>
                            <span><strong>564</strong> followers</span>
                            <span><strong>95</strong> following</span>
                        </StatisticsStyled>
                    </DetailsStyled>
                </FirstRowStyled>
                <SecondRowStyled>
                    <DescriptionStyled>

                    </DescriptionStyled>
                </SecondRowStyled>
            </ProfileDetailsStyled>
        );
    }
}

export default ProfileDetails;
