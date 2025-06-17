import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Quienessomos from '../pages/QuienesSomos';
import Registro from '../pages/Registro';
import Login from '../pages/Login';
import Cardd from '../pages/Cardd';
import PanelDeControl from '../components/PanelDeControl';
import Nav from '../pages/Nav';
import Publicaciones1 from '../components/Publicaciones1';
import Usuario from '../components/user';


function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QuienesSomos" element={<Quienessomos />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/card" element={<Cardd />} />
        <Route path="/panel" element={<PanelDeControl />} />
        <Route path="/navbar" element={<Nav />} />
        <Route path="/publicaciones" element={<Publicaciones1 />} />
        <Route path="/Usuario" element={<Usuario/>} />
      </Routes>
    </Router>
  );
}

export default Routing;