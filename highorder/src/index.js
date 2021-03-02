import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App'

if(navigator.serviceWorker){
  console.log(navigator.serviceWorker)
  navigator.serviceWorker.register("serviceWorker.js")
}

ReactDOM.render(
    <div>
      <App/>
    </div>,document.getElementById('root'));
