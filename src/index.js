import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let contacts = [
  {
    id : '0',
    name : 'kelechi', 
    phone : "909"
  },
  {
    id : '1',
    name : 'Amaka',
    phone : "245"
  },
  {
    id : '2',
    name : 'Ngozi',
    phone : "242"
  },
  {
    id : '3',
    name : 'Emeka',
    phone : "544"
  },
  {
    id : '4',
    name : 'Obinna',
    phone : "940"
  }

]

ReactDOM.render(<App contacts = {contacts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
