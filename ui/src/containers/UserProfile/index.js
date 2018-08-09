import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UserProfileStyled } from './styles';

class UserProfile extends Component {
    render() {
        return (
            <UserProfileStyled>
                UserProfile
            </UserProfileStyled>
        );
    }
}

export default connect()(UserProfile);
