import './App.css';
import {BrowserRouter, Routes, Route} from  'react-router-dom'
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Residuos from './pages/Residuos';


function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/cadastro' element={<Cadastro/>}/>
                  <Route path='/residuos' element={<Residuos/>}/>
              </Routes>
      </BrowserRouter>

      

    </div>
  );

}

export default App;
