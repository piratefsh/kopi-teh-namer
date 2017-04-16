import 'file?name=[name].[ext]!../public/index.html';
import 'styles/main.scss';

import ReactDOM from 'react-dom';
import React from 'react';
import DrinkOrder from './order/DrinkOrder';

ReactDOM.render(
  <DrinkOrder />,
    document.getElementById('main')
);
