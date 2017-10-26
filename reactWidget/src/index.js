import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

export const init = (config) => {
    ReactDOM.render(<App />, document.getElementById(config.initTag));
}

// ReactDOM.render(<App />, document.getElementById('root'));
