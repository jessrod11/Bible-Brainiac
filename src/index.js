import React from 'react';
import ReactDOM from 'react-dom';
import 'react-s-alert/dist/s-alert-default.css';
import './styles/index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
