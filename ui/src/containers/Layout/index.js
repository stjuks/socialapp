import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from '../Navbar';
import Feed from '../Feed';
import Sidebar from '../Sidebar';
import UserProfile from '../UserProfile';

import { LayoutStyled, ContentStyled } from './styles';

import { verifyToken } from '../../actions/authActions';

class Layout extends Component {
    componentDidMount() {
        this.props.dispatch(verifyToken());
    }

    render() {
        return (
            <LayoutStyled>
                <Navbar />
                <ContentStyled>
                    <Sidebar />
                    <Switch>
                        <Route exact path="/" component={Feed} />
                        <Route exact path="/:username" component={UserProfile} />
                    </Switch>
                </ContentStyled>
            </LayoutStyled>
        );
    }
}

export default connect()(Layout);
