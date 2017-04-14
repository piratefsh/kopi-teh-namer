import 'file?name=[name].[ext]!../public/index.html';
import 'styles/style.less' 
import Kopi from './Kopi'
import Constants from './Constants'
import ReactDOM from 'react-dom'
import React from 'react'
import KopiSelector from 'KopiSelector'
const kopi = new Kopi({
  base: Constants.BASE[0], 
  milk:Constants.MILK[0], 
  dilution: Constants.DILUTION[0], 
  temperature:Constants.TEMPERATURE[0], 
  sweetness:Constants.SWEETNESS[0], 
  togo:Constants.TOGO[0], 
  order:Constants.ORDER[0]
});

console.log(kopi.toString());

ReactDOM.render(
    <KopiSelector/>,
    document.getElementById('main')
)