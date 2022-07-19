import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import NavBar from './components/Nav/NavBar';


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/'>
          <Route path='login' element={<Login/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
