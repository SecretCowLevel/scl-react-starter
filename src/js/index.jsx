import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App.jsx';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
if (typeof window !== 'undefined') {
    window.React = React;
}

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>, document.getElementById('scl-container'));

if (module.hot) {
    module.hot.accept('./App.jsx', () => {
        const NextApp = require('./App.jsx').default; // eslint-disable-line

        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>, document.getElementById('scl-container'));
    });
}
