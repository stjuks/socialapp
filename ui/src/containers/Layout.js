import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './Navbar';
import Feed from './Feed';
import Sidebar from './Sidebar';
import UserProfile from './UserProfile';

import { verifyToken } from '../actions/authActions';

class Layout extends Component {
    componentDidMount() {
        this.props.dispatch(verifyToken());
    }

    render() {
        return (
            <div className="layout">
                <Navbar />
                <div className="content">
                    <Sidebar />
                    <Switch>
                        <Route exact path="/" component={Feed} />
                        <Route exact path="/:username" component={UserProfile} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default connect()(Layout);
