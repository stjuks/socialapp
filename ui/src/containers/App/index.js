import React, { Component } from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from 'store';
import history from 'helpers/history';
import theme from 'helpers/theme';

import LoginScreen from 'containers/LoginScreen/index';
import RegisterScreen from 'containers/RegisterScreen/index';
import Layout from 'containers/Layout/index';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <ThemeProvider theme={theme}>
                        <div className="app-container">
                            <Switch>
                                <Route exact path="/login" component={LoginScreen} />
                                <Route exact path="/register" component={RegisterScreen} />
                                <Route path="/" component={Layout} />
                            </Switch>
                        </div>
                    </ThemeProvider>
                </Router>
            </Provider>
        );
    }
}

export default App;
