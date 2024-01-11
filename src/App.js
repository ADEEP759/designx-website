import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Product from './Pages/Product';
import Resources from './Pages/Resources';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import BlogDetails from './Pages/BlogDetails';
import IBPMS from './Components/Blogs Detail/IBPMS';
import ArtificalIntelligence from './Components/Blogs Detail/ArtificalIntelligence';


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
      <Route path='/iBPMS' element={<IBPMS/>}/>
      <Route path='/ArtificialIntelligence' element={<ArtificalIntelligence/>}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
