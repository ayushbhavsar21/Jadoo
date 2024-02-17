import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import { Footer } from './components/Footer'
import Tenant from './Tenant/Tenant';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Getstarted from './pages/Getstarted';
import PanoramaViewer from './PanaromaViewer/Panaroma';
import LogOut from './components/LogOut';
import PropertyForm from './Owner/PropertyForm';
import DynamicGoogleMap from './components/Map';
import LocationForm from './components/LocationForm';

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Tenant" element={<Tenant/>} />
      <Route path="/PropertyForm" element={<PropertyForm/>} />
      <Route path="/Getstarted" element={<Getstarted/>} />
      <Route path="/Pano" element={<PanoramaViewer/>} />
      <Route path="/Logout" element={<LogOut />} />
      <Route path='/Maps' element={<DynamicGoogleMap/>}/>
      <Route path='/Location' element={<LocationForm/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
