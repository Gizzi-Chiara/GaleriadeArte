import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Principal from './componentes/Principal'
import NuevaObra from './componentes/NuevaObra';
import Detalle from './componentes/Detalle';
import Login from './componentes/Login';
import Registro from './componentes/Registro';
import EditarObra from './componentes/EditarObra';
import MiObraD from './componentes/MiObraD';
import MisObras from './componentes/MisObras';

function App() {
  return (
    <div className="App text-light">
      <div>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registro' element={<Registro/>}/>
          
          <Route path='/' exact element={<Navigate to={"/principal"}/>}/>
          <Route path='/principal' element={<Principal/>}/>
          <Route path='/nueva/obra' element={<NuevaObra/>}/>
          <Route path='/obra/:id' element={<Detalle/>}/>
          <Route path='/detalle/:id' element={<MiObraD/>}/>
          <Route path='/actualizar/miObra/:id' element={<EditarObra/>}/>
          <Route path='/misObras' element={<MisObras/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
