import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { routes } from 'helpers/constants';

import { verifyToken } from 'actions/authActions';

import LoginScreen from '../LoginScreen';
import RegisterScreen from '../RegisterScreen';
import Layout from '../Layout';
import SettingsModal from '../SettingsModal';
import UploadModal from '../UploadModal';

import { AppStyled } from './styles';

class Root extends Component {
    componentDidMount() {
        let path = this.props.location.pathname;
        path = [routes.login, routes.register].indexOf(path) === -1 ? path : routes.app;
        this.props.dispatch(verifyToken(path));
    }

    render() {
        return (
            <AppStyled>
                <Switch>
                    <Route exact path={routes.login} component={LoginScreen} />
                    <Route exact path={routes.register} component={RegisterScreen} />
                    <Route path={routes.app} component={Layout} />
                </Switch>
                <SettingsModal />
                <UploadModal />
            </AppStyled>
        );
    }
}

export default withRouter(connect()(Root));
