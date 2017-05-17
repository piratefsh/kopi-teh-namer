import 'file?name=[name].[ext]!../public/index.html';
import 'styles/main.scss';
import swUrl from 'file?name=worker.js!babel!./worker';
import ReactDOM from 'react-dom';
import React from 'react';
import DrinkOrder from './order/DrinkOrder';

ReactDOM.render(
  <DrinkOrder />,
    document.getElementById('main')
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(swUrl, {scope: '/kopi-teh-namer/public/'})
    .then(() => {
      console.log('registration success!')
    })
    .catch((err) => {
      console.log('registration failed')
      console.log(err)
    })
}