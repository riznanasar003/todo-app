import logo from './logo.svg';
import './App.css';
import Add from './Components/Add';
import Search from './Components/Search';
import Delete from './Components/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './Components/ViewAll';

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/Delete' element={<Delete/>}/>
        <Route path='/ViewAll' element={<ViewAll/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
