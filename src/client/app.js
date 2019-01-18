import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import 'normalize.css/normalize.css';
import './css/app.scss';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto']
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
