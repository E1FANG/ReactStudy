import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import Father from './函数组件与类组件demo1'
import Father2 from './函数组件与类组件使用props'

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <Father />
//     <Father2 />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
    <Father />,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
