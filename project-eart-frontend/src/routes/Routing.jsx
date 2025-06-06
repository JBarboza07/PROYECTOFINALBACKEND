
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Quienessomos from '../pages/QuienesSomos';
import Registro from '../pages/Registro';
import Login from '../pages/Login';
import Cardd from '../pages/cardd';
import Panel from '../pages/Panel';
import PanelDeControl from '../components/PanelDeControl';
import Nav from '../pages/Nav';
function Routing() {
 return (
    <div>
      <Router>
        <Routes>
           <Route path="/inicio" element={<Home/>}/>
           <Route path="/Saber más" element={<Quienessomos/>}/>
            <Route path="/Registro" element={<Registro/>}/>
             <Route path="/Login" element={<Login/>}/>
             <Route path="/Card" element={<Cardd/>}/>
              <Route path="/Panel" element={<PanelDeControl/>}/>
              <Route path="/Navbar" element={<Nav/>}/>
            

          

        </Routes>
      </Router>
    </div>
  );
}

export default Routing