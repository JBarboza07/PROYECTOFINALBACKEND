import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Quienessomos from '../pages/QuienesSomos';
import Registro from '../pages/Registro';
import Login from '../pages/Login';
import PanelDeControl from '../components/PanelDeControl';
import Nav from '../pages/Nav';
import Publicaciones from '../pages/Publicaciones';
import Cards from '../components/Cards';
import AdminDashboard from '../pages/AdminDashboard';
import Noti from '../pages/Noti';
import Noticias from '../components/Noticias';
import CentroDeAyuda from '../pages/CentroDeAyuda';
import PanelAdmin from '../pages/PanelAdmin';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QuienesSomos" element={<Quienessomos />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Panel" element={<PanelDeControl/>} />
        <Route path="/navbar" element={<Nav/>} />
        <Route path="/Publicaciones" element={<Publicaciones/>} />
        <Route path="/Cards" element={<Cards/>} />
        <Route path="/Noti" element={<Noticias/>} />
       <Route path="/Ayuda" element={<CentroDeAyuda/>} />
       <Route path="/Admin" element={<PanelAdmin/>} />
        
        
      </Routes>
    </Router>
  );
}

export default Routing;