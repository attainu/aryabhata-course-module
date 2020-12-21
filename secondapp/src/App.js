import logo from './logo.svg';
import './App.css';
import StockList from './stocklits'
import UserList from './userlist';
import HOC from './HOC';

var StockData = [
  {
    id: 1,
    name: 'TCS'
      
  },
  {
      id: 2,
      name: 'Infosys'
  },
  {
      id: 3,
      name: 'Reliance'
  }
]

var UserData = [
  {
    id: 1,
    name: 'Krunal'
      
  },
  {
      id: 2,
      name: 'Ankit'
  },
  {
      id: 3,
      name: 'Rushabh'
  }
]

const Stock = HOC(StockList,StockData);
const User = HOC(UserList,UserData);

function App() {
  return (
    <div className="App">
      <Stock/>
      <User/>
    </div>
  );
}

export default App;

//Hoc take component as a parameter and return component
//component that return component
