import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Quienessomos from '../pages/QuienesSomos';
import Registro from '../pages/Registro';
import Login from '../pages/Login';
import Nav from '../pages/Nav';
import Publicaciones from '../pages/Publicaciones';
import AdminDashboard from '../pages/AdminDashboard';
import Noti from '../pages/Noti';
import Noticias from '../components/Noticias';
import CardsComponente from '../components/CardsComponente';
import PanelDeControl from '../components/PanelDeControl';
import Panel from '../pages/Panel';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QuienesSomos" element={<Quienessomos />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Panel" element={<Panel/>} />
        <Route path="/navbar" element={<Nav/>} />
        <Route path="/Publicaciones" element={<Publicaciones/>} />
        <Route path="/Cards" element={<CardsComponente/>} />
        <Route path="/Noti" element={<Noticias/>} />
        
      </Routes>
    </Router>
  );
}

export default Routing;