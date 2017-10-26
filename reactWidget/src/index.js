import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './components/App.js';

export const init = (config) => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById(config.initTag)
    );
}

// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>,
//     document.getElementById('root'));
