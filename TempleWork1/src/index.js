import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


//    "start": "webpack-dev-server -d --config ./webpack.config.js  --inline --hot --colors --content-base public/ --history-api-fallback",

