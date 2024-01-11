import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Product from './Pages/Product';
import Resources from './Pages/Resources';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import BlogDetails from './Pages/BlogDetails';
import IBPMSMain from './Pages/IBPMSMain';
import ArtificialIntelligenceMain from './Pages/ArtificialIntelligenceMain';
import DigitalTwinMain from './Pages/DigitalTwinMain';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path='/Aboutus' element={<About/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/Resources' element={<Resources/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Blogs' element={<Blogs/>}/>
      <Route path='/BlogDetails' element={<BlogDetails/>}/>
      <Route path='/iBPMS' element={<IBPMSMain/>}/>
      <Route path='/ArtificialIntelligence' element={<ArtificialIntelligenceMain/>}/>
      <Route path='/DigitalTwin' element={<DigitalTwinMain/>}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
