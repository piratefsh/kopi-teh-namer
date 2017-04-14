import 'file?name=[name].[ext]!../public/index.html';
import 'styles/main.scss';

import ReactDOM from 'react-dom';
import React from 'react';
import DrinkSelector from './DrinkSelector';

ReactDOM.render(
  <DrinkSelector />,
    document.getElementById('main')
);
