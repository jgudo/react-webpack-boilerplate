import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto']
  }
});

ReactDOM.render(<p>Boilerplate</p>, document.getElementById('app'));


