
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Outlet></Outlet>
     {/* <Home></Home> */}
    </div>
  );
}

export default App;
