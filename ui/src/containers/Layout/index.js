import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { LayoutStyled, ContentStyled } from './styles';

import Sidebar from '../Sidebar';
import Feed from '../Feed';
import UserProfile from '../UserProfile';
import Navbar from '../Navbar';

class Layout extends Component {
    render() {
        const { self } = this.props;

        return (
            self.isLoggedIn ?
            <LayoutStyled>
                    <Sidebar />
                    <ContentStyled>
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={UserProfile} />
                            <Route path="/:username" component={UserProfile} />
                        </Switch>
                    </ContentStyled>
            </LayoutStyled> : null
        );
    }
}

const mapStateToProps = store => {
    return {
        self: store.user.self
    }
}

export default connect(mapStateToProps)(Layout);
