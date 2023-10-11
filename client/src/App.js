import './App.css';
import "./componentes/AcercaDe/AcercaDe.css";

import {Routes, Route, Navigate} from 'react-router-dom';
import Principal from './componentes/Principal'
import NuevaObra from './componentes/NuevaObra';
import Detalle from './componentes/Detalle';
import Login from './componentes/Login';
import Registro from './componentes/Registro';
import EditarObra from './componentes/EditarObra';
import MiObraD from './componentes/MiObraD';
import MisObras from './componentes/MisObras';
import Chat from './componentes/Chat';

import AcercaDe from './componentes/AcercaDe/AcercaDe';
import Home from './componentes/Home';

import Actividades from './componentes/Actividades';
import CrearActividad from './componentes/CrearActividad';
import VerActividad from './componentes/VerActividad';
import ActualizarActividad from './componentes/ActualizarActividad';
import Museos from './componentes/Museos';
import Nacional from './componentes/Nacional';
import Jade from './componentes/Jade';
import BancoCentral from './componentes/BancoCentral';
import Sor from './componentes/Sor';
import Omar from './componentes/Omar';
import Santamaria from './componentes/Santamaria';
import Popular from './componentes/Popular';
import Orosi from './componentes/Orosi';
import Ninos from './componentes/Ninos';

function App() {
  return (
    <div className="App text-light">
      <div>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registro' element={<Registro/>}/>
          
          <Route path='/' exact element={<Navigate to={"/home"}/>}/>
          <Route path='/principal' element={<Principal/>}/>
          <Route path='/nueva/obra' element={<NuevaObra/>}/>
          <Route path='/obra/:id' element={<Detalle/>}/>
          <Route path='/detalle/:id' element={<MiObraD/>}/>
          <Route path='/actualizar/miObra/:id' element={<EditarObra/>}/>
          <Route path='/misObras' element={<MisObras/>}/>
          <Route path='/chat' element={<Chat/>}/>

          <Route path="/acercaDe" element={<AcercaDe/>}/>
          <Route path='/home' element={<Home/>}/>

          <Route path='/actividades' element={<Actividades/>}/>
          <Route path='/actividades/crear' element={<CrearActividad/>}/>
          <Route path='/actividades/ver/:id' element={<VerActividad/>}/>
          <Route path='/actividades/editar/:id' element={<ActualizarActividad/>}/>

          <Route path='/museos' element={<Museos/>}/>
          <Route path='/museos/ver/nacional' element={<Nacional/>}/>
          <Route path='/museos/ver/jade' element={<Jade/>}/>
          <Route path='/museos/ver/bancocentral' element={<BancoCentral/>}/>
          <Route path='/museos/ver/sor' element={<Sor/>}/>
          <Route path='/museos/ver/omar' element={<Omar/>}/>
          <Route path='/museos/ver/santamaria' element={<Santamaria/>}/>
          <Route path='/museos/ver/popular' element={<Popular/>}/>
          <Route path='/museos/ver/orosi' element={<Orosi/>}/>
          <Route path='/museos/ver/ninos' element={<Ninos/>}/>

        </Routes>
      </div>
    </div>
  );
}

export default App;


