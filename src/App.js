import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Signup/>}/>
    <Route path='/Login' element={<Login/>}/>

    </Routes>
    </BrowserRouter>
    <Login/>
    </div>
  );
}

export default App;
