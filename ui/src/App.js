import React, { Component } from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import history from './helpers/history';

import LoginScreen from './containers/LoginScreen';
import RegisterScreen from './containers/RegisterScreen';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <div className="app-container">
                        <Switch>
                            <Route exact path="/login" component={LoginScreen} />
                            <Route exact path="/register" component={RegisterScreen} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
