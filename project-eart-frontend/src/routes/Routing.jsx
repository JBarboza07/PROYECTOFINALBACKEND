import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from '../Pages/Nav';

function Routing() {
 return (
    <div>
      <Router>
        <Routes>
           <Route path="/Nav" element={<Nav/>}/>
         





          

        </Routes>
      </Router>
    </div>
  );
}

export default Routing