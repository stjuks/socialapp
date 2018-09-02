import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { LayoutStyled, ContentStyled } from './styles';

import { verifyToken } from 'actions/authActions';

import Sidebar from '../Sidebar';
import Feed from '../Feed';
import UserProfile from '../UserProfile';
import Navbar from '../Navbar';

class Layout extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(verifyToken());
    }

    render() {
        return (
            <LayoutStyled>
                <Sidebar />
                <ContentStyled>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Feed} />
                        <Route path="/:username" component={UserProfile} />
                    </Switch>
                </ContentStyled>
            </LayoutStyled>
        );
    }
}

export default connect()(Layout);
