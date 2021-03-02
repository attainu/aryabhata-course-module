import React from 'react';
import ReactDOM from 'react-dom';
import StockList from './component/StockList';
import UserList from './component/UserList';


ReactDOM.render(
    <div>
      <StockList/>
      <UserList/>
    </div>,document.getElementById('root'));
