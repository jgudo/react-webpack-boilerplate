import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import 'styles/style.scss';
import WebFont from 'webfontloader';
import App from 'components/App';

WebFont.load({
  google: {
    families: ['Roboto']
  }
});

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then((registration) => {
    console.log('SW registered: ', registration);
  }).catch((registrationError) => {
    console.log('SW registration failed: ', registrationError);
  });
}

ReactDOM.render(<App />, document.getElementById('app'));
