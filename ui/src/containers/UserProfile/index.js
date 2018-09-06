import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileDetails from 'components/ProfileDetails';

import { UserProfileStyled } from './styles';

class UserProfile extends Component {
    render() {
        return (
            <UserProfileStyled>
                <ProfileDetails />
            </UserProfileStyled>
        );
    }
}

export default connect()(UserProfile);
