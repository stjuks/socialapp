import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import { routes } from 'helpers/constants';
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
                            <Route exact path={routes.app} component={Feed} />
                            <Route exact path={routes.profile()} render={props => 
                                <UserProfile key={props.location.pathname} /> 
                            } />
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

export default withRouter(connect(mapStateToProps)(Layout));
