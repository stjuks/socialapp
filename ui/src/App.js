import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from 'store';
import history from 'helpers/history';
import theme from 'helpers/theme';

import Root from 'containers/Root';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <ThemeProvider theme={theme}>
                        <Route path="/" component={Root} />
                    </ThemeProvider>
                </Router>
            </Provider>
        );
    }
}

export default App;
