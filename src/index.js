import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import App from './类组件详解/props钩子'

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <Father />
//     <Father2 />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
