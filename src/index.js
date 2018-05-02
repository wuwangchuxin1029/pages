import React from 'react';
import ReactDOM from 'react-dom';
import mock from './mock'
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

mock()

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
