import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Product from './Pages/Product';
import Resources from './Pages/Resources';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import BlogDetails from './Pages/BlogDetails';


function App() {
  return (
    <BrowserRouter basename='/DesignX_web'>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path='/Aboutus' element={<About/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/Resources' element={<Resources/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Blogs' element={<Blogs/>}/>
      <Route path='/BlogDetails' element={<BlogDetails/>}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
