import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Quienessomos from '../pages/QuienesSomos';
import Registro from '../pages/Registro';
import Login from '../pages/Login';
import PanelDeControl from '../components/PanelDeControl';
import Nav from '../pages/Nav';
import Publicaciones from '../pages/Publicaciones';
import CardsComponent from '../components/CardsComponente';
import AdminDashboard from '../pages/AdminDashboard';
import Noti from '../pages/Noti';

import CentroAyuda from '../pages/CentroAyuda';
import PanelAdmin from '../pages/PanelAdmin';
import Panel from '../pages/Panel';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QuienesSomos" element={<Quienessomos />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Panel" element={<Panel/>} />
        <Route path="/navbar" element={<Nav/>} />
        <Route path="/Publicaciones" element={<Publicaciones/>} />

        <Route path="/CardsComponent" element={<CardsComponent/>} />
        <Route path="/Noti" element={<Noti/>} />
       <Route path="/CentroAyuda" element={<CentroAyuda/>} />
       <Route path="/Admin" element={<PanelAdmin/>} />

      </Routes>
    </Router>
  );
}
export default Routing;