import 'file?name=[name].[ext]!../public/index.html';
import 'styles/main.scss';

import ReactDOM from 'react-dom';
import React from 'react';
import KopiSelector from './KopiSelector';

ReactDOM.render(
  <KopiSelector />,
    document.getElementById('main')
);
