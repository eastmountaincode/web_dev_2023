import './App.css';
import Labs from './Labs/index.js';
import HelloWorld from './Labs/a3/HelloWorld.js';
import Kanbas from './Kanbas/index.js'
import { BrowserRouter, Navigate } from 'react-router-dom';
import {Routes, Route} from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    // Using browser router instead of hash router
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={ <Navigate to="/Labs/a4"/>}/>
        <Route path="/hello" element = {<HelloWorld />}/>
        <Route path="/Labs/*" element = {<Labs />}/>
        <Route path="/kanbas/*" element = {<Kanbas />}/>
      </Routes>
      
    </BrowserRouter>
      
  );
}

export default App;
