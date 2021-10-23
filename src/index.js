import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if (window.console) {
  var o = navigator.userAgent.toLowerCase();
  if (o.indexOf("chrome") > -1 || o.indexOf("firefox") > -1) {
      window.console.log.apply(console, ["%c %c Site Built By Jack Jona %c %c  https://jackjona.com  %c ", "background: #f12626; border: 1px solid #f12626; padding:5px 0; margin:3px 0 10px 0;", "background: #ffffff; border: 1px solid #f12626; color: #f12626; padding:5px 0; margin:3px 0 10px 0;", "background: #f12626; border: 1px solid #f12626; padding:5px 0; margin:3px 0 10px 0;", "background: #ffffff; border: 1px solid #f12626; color: #f12626; padding:5px 0; margin:3px 0 10px 0;", "background: #f12626; border: 1px solid #f12626; padding:5px 0; margin:3px 0 10px 0;"])
  } else
      window.console.log("Site Built By Jack Jona - https://jackjona.com")
};