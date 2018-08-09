import React, { Component } from 'react';

import {
    UserStatusStyled,
    ProfilePictureStyled,
    StatusDetailsStyled,
    StatusIconStyled,
    StatusStyled,
    NameStyled,
    MenuButtonStyled
} from './styles';

class UserStatus extends Component {
    render() {
        return (
            <UserStatusStyled>
                <ProfilePictureStyled>
                    <img src="/images/default-avatar.svg" alt="avatar" />
                </ProfilePictureStyled>
                <StatusDetailsStyled>
                    <NameStyled>
                        Steven Juks
                    </NameStyled>
                    <StatusStyled>
                        <StatusIconStyled />
                        Online
                        <MenuButtonStyled>
                            <img src="/images/arrowhead-down.svg" alt="menu-btn"/>
                        </MenuButtonStyled>
                    </StatusStyled>
                </StatusDetailsStyled>
            </UserStatusStyled>
        );
    }
}

export default UserStatus;
