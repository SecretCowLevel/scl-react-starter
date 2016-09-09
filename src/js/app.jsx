import React from 'react';
// import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './store/configureStore';
import routes from './routes.jsx';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);


const App = () => (
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>
);

export default App;
