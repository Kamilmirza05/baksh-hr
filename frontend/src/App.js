import logo from './logo.svg';
import './App.css';
import Login from './features/login/components/login';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className='w-full h-full'>
      {/* <Login/>  */}
      <Sidebar/>
    </div>
  );
}

export default App;
