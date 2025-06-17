import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Quienessomos from '../pages/QuienesSomos';
import Registro from '../pages/Registro';
import Login from '../pages/Login';
import PanelDeControl from '../components/PanelDeControl';
import Nav from '../pages/Nav';
import Publicaciones from '../pages/Publicaciones';
import Cards from '../components/Cards';
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/QuienesSomos" element={<Quienessomos />} />
=======
        <Route path="/Quienessomos" element={<Quienessomos/>} />
>>>>>>> a110de09 (17/06/2025_3:17PM)
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panel" element={<PanelDeControl />} />
        <Route path="/navbar" element={<Nav />} />
        <Route path="/Publicaciones" element={<Publicaciones/>} />
        <Route path="/Cards" element={<Cards/>} />
      </Routes>
    </Router>
  );
}

export default Routing;