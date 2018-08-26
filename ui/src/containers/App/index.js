import React, { Component } from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from 'store';
import history from 'helpers/history';
import theme from 'helpers/theme';

import LoginScreen from 'containers/LoginScreen';
import RegisterScreen from 'containers/RegisterScreen';
import Layout from 'containers/Layout';
import SettingsModal from 'containers/SettingsModal';

import { AppStyled } from './styles';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <ThemeProvider theme={theme}>
                        <AppStyled>
                            <Switch>
                                <Route exact path="/login" component={LoginScreen} />
                                <Route exact path="/register" component={RegisterScreen} />
                                <Route path="/" component={Layout} />
                            </Switch>
                            <SettingsModal />
                        </AppStyled>
                    </ThemeProvider>
                </Router>
            </Provider>
        );
    }
}

export default App;
